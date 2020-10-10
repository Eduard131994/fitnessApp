<template>
  <div class="foods">
    <div class="foods-table">
      <div class="foods-table-header">
        <i class="fas fa-plus-circle" @click="openEdit(null)"></i>
        <input type="text" placeholder="Search..." v-model="foodFilter">
      </div>
      <div class="foods-table-data">
          <table>
            <thead>
              <tr>
                <th >Food Name</th>
                <th>Calories</th>
                <th>Carbs</th>
                <th>Protein</th>
                <th> Fat</th>
              </tr>
            </thead>
            <tbody name="fade" is="transition-group">
                <tr v-for="(food, index) in filterFoods" :key="index" @click="openEdit(index)">
                  <td>{{food.name}}</td>
                  <td>{{food.calories}}</td>
                  <td>{{food.carbs}}</td>
                  <td>{{food.protein}}</td>
                  <td>{{food.fat}}</td>
                </tr>
            </tbody>
          </table>
      </div>
    </div>
    <transition name="fade">
      <edit-food :food="selectedToEdit" v-if="editFood || newFood" @exit="close" @completed="requestFoods"></edit-food>
    </transition>
  </div>
</template>

<script>
import apiRoutes from '../apiRoutes';
import EditFood from '../components/EditFood';
export default {
  components: {EditFood},
  data() {
    return {
      foods: [],
      foodFilter: '',
      currentSort:'name',
      currentSortDir:'asc',
      selectedToEdit: null,
      editFood: false,
      newFood : false,
    }
  },
  computed: {
    filterFoods() {
      if(this.foodFilter.length == 0) {
        return this.foods;
      }
      return this.foods.filter(food => food.name.indexOf(this.foodFilter) >= 0);
    },
    edit(value) {
      this.selectedToEdit = value;
    }
  },

  created() {
    this.requestFoods();
  },
  methods : {
    openEdit(id) {
      if(id== null) 
      {
        this.newFood = true;
        this.selectedToEdit = null;
        return;
      }
      this.selectedToEdit = this.foods[id];
      this.editFood = true;
    },
    close() {
      this.editFood = false;
      this.newFood = false;
    },
    requestFoods() {
      axios[apiRoutes.foods.index.method](`${apiRoutes.foods.index.url}`).then((result) => {
        this.foods = result.data;
        this.$forceUpdate();
      }).catch((err) => {
        console.log(err);
      });
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';

.foods {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  &-table{
    margin-top: 100px ;
    background-color: $table-background-color;
    color: $white;
    min-width: 950px;
    max-width: 1140px;
    font-size: 12px;
    border-radius: 3px;
    max-height: 500px;
    display: block;
    overflow-y: auto;
    &-header {
      min-height: 30px;
      border-bottom: 1px solid $table-border;
      display: flex;
      padding: 10px 20px;
      justify-content: space-between;
      align-items: center;
      i{
        font-size: 20px;
        transition: all 0.3s ease;
        &:hover{
          cursor: pointer;
          color: $color1;
        }
      }
      input {
        background-color: $table-input-background-color;
        padding: 0.375rem 0.75rem;
        display: block;
        border-radius: 3px;
        border: 1px solid $table-border;
        color: $white;
        outline: none;
        width: 200px;
      }
    }
    &-data {
      table {
        border-collapse: collapse;
        width: 100%;
        table-layout: fixed;
        thead {
          tr{
            th{
              border-bottom: 1px solid $table-border;
              text-align: left;
              padding: 12px 20px;
          }
        }
      }
      tbody{
        tr{
          td{
              padding: 12px 20px;
              border-bottom: 1px solid $table-border;
            }
          &:nth-child(even) {
              background-color: $table-even-color;
            }
          &:hover {
            background-color: $color1;
            cursor: pointer;
          }
        }
      }
    }
  }
}
}




</style>