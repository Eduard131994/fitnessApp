<template>
  <div class="loader">
      <div class="circle">

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';
    .loader {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(204, 204, 204, 0.741);
        z-index: 3;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .circle {
        display: block;
        width: 70px;
        height: 70px;
        border: 0.4rem solid #fff;
        border-top: 0.4rem solid $color1;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

</style>