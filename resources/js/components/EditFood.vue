<template>
    <div class="edit-food" @mousedown="checkToClose">
        <div class="edit-food-box" id="edit-box">
            <div class="edit-food-box-header">
                <i class="fas fa-hamburger"></i>
            </div>
            <div class="edit-food-box-body">
                <div class="edit-food-box-body-inputs">
                    <costum-input @change="changeName" :value="editedFood.name" placeholder="Name"></costum-input>
                    <costum-input @change="changeCalories" :value="editedFood.calories" placeholder="Calories"></costum-input>
                    <costum-input @change="changeCarbs" :value="editedFood.carbs" placeholder="Carbs"></costum-input>
                    <costum-input @change="changeProtein" :value="editedFood.protein" placeholder="Protein"></costum-input>
                    <costum-input @change="changeFat" :value="editedFood.fat" placeholder="Fat"></costum-input>
                </div>
                <costum-button :disabled="submitRequest" @submit="submit" v-ripple="'rgba(255, 255, 255, 0.3)'">Submit</costum-button>
                <costum-button :disabled="submitRequest" @submit="deleteFood" v-ripple="'rgba(255, 255, 255, 0.3)'" v-if="editedFood.id != ''" class="delete">Delete</costum-button>
            </div>
            <loader v-if="submitRequest"></loader>
        </div>
    </div>
  
</template>

<script>
import CostumInput from '../shared/components/Input';
import CostumButton from '../shared/components/Button';
import Loader from '../shared/components/Loader';
import apiRoutes from '../apiRoutes';
import toastr from 'toastr';
export default {
    props: ['food'],
    data() {
        return {
            editedFood : {
                'id' : '',
                'name': '',
                'calories': '',
                'carbs': '',
                'protein': '',
                'fat': '',
            },
            submitRequest: false,
        }
    },
    created() {
        if(this.food != null) {
            this.editedFood.id = this.food.id;
            this.editedFood.name = this.food.name;
            this.editedFood.calories = this.food.calories;
            this.editedFood.carbs = this.food.carbs;
            this.editedFood.protein = this.food.protein;
            this.editedFood.fat = this.food.fat;
        }
    },
    components : {CostumInput,CostumButton, Loader},

    methods: {
        changeName(value) {
            this.editedFood.name = value;
        },
        changeCalories(value) {
            this.editedFood.calories = value;
        },
        changeCarbs(value) {
            this.editedFood.carbs = value;
        },
        changeProtein(value) {
            this.editedFood.protein = value;
        },
        changeFat(value) {
            this.editedFood.fat = value;
        },
        checkToClose() {
            console.log(event);
            var box = document.getElementById('edit-box');
            if(this.submitRequest)
                return;
            if(!box.contains(event.target)) {
                this.$emit('exit')
            }
        },
        submit() {
            this.submitRequest = true;
            let url = '';
            let method = '';
            if(this.editedFood.id.length == 0) {
                url = apiRoutes.foods.store.url;
                method = apiRoutes.foods.store.method;
            } else {
                let urlWihoutId = apiRoutes.foods.update.url;
                url = urlWihoutId.replace('{0}', this.editedFood.id);
                method = apiRoutes.foods.update.method;
            }

            axios[method](url, this.editedFood)
            .then((result) => {
                this.$emit('exit');
                this.$emit('completed');
                this.successMessage('Success', 'The request was succesfull!', 'toast-bottom-left');
            })
            .catch((err) => {
                if(err.response.status == 422) {
                    for(let obj in err.response.data.errors) {
                        if(err.response.data.errors.hasOwnProperty(obj)) {
                            let title = obj.charAt(0).toUpperCase() + obj.slice(1);
                            this.errorMessage(title, err.response.data.errors[obj][0], 'toast-bottom-left');
                        }
                    }
                }
            })
            .finally(() => {
                this.submitRequest = false;
            });
        },
        deleteFood() {
            this.submitRequest = true;

            let url = apiRoutes.foods.destroy.url;
            url = url.replace('{0}', this.editedFood.id);
            let method = apiRoutes.foods.destroy.method;

            axios[method](url, this.editedFood)
            .then(() => {
                this.successMessage('Success', 'The request was succesfull!', 'toast-bottom-left');
                this.$emit('exit');
                this.$emit('completed');
            })
            .catch((err)=> {
                for(let obj in err.response.data.errors) {
                    if(err.response.data.errors.hasOwnProperty(obj)) {
                        let title = obj.charAt(0).toUpperCase() + obj.slice(1);
                        this.errorMessage(title, err.response.data.errors[obj][0], 'toast-bottom-left');
                    }
                }
            }).finally(() => {
                this.submitRequest = false;
            })


        }
    },

}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';
.edit-food{
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(204, 204, 204, 0.487);
    display: flex;
    justify-content: center;
    align-items: center;
    &-box {
        width: 400px;
        max-height: 500px;
        background-color: $white;
        border-radius: 3px;
        padding: 20px;
        position: relative;
        &-header {
            margin-top: 20px;
            text-align: center;
            i {
                font-size: 60px;
            }
        }
        &-body {
            &-inputs {
                .input {
                    margin-top: 10px;
                }
            }
            .button {
                width: 50%;
                margin: 20px auto 0;
            }
        }
    }
}

</style>