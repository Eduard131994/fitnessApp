<template>
  <div class="input">
      <input type="text" placeholder=" " v-model="input" @keyup="onKeyUp" >
      <label for="">
          <span>{{placeholder}}</span>
      </label>

  </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: "No Placeholder",
        },
        value : {
            type : [String, Number],
            default: "",
        }
    },
    data() {
        return {
            input: this.value
        }
    },
    methods: {
        onKeyUp(event) {
            this.$emit('change', this.input);
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';
    .input {
        width: 100%;
        height: 50px;
        position: relative;
        overflow: hidden;
        input {
            width: 100%;
            height: 100%;
            outline: none;
            border: 0;
            padding-top: 15px;
            transition: all 0.3s ease;
            &:focus {
                color: $color1;
            }
        }
        label {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            bottom: 1px;
            pointer-events: none;
            border-bottom: 1px solid #ccc;
            span {
                position: absolute;
                bottom: 5px;
                transition: all 0.3s ease;
            }
            &::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: -1px;
                height: 100%;
                width: 100%;
                border-bottom: 2px solid $color1;
                transform: translateX(-100%);
                transition: all 0.3s ease;
            }
        }
        input:focus + label span, input:not(:placeholder-shown) + label span {
            transform: translateY(-150%);
            font-size: 0.7rem;
        }
        input:focus + label::after {
            transform: translateX(0%);
            color: $color1;
        }
        input:focus + label span {
            color: $color1;
        } 
    }

</style>