<template>
  <div class="button" @click="$emit('submit')" :class="{'disabled': disabled}">
    <span>
        <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
    props : {
        'disabled' : {
            type: Boolean,
            default: false,
        },
    },

}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';
.button {
    display: block;
    background-color: rgba($color1, 0.6);
    padding: 10px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: $white;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    &:hover{
        background-color: $color1;
    }
}
.disabled {
    cursor: not-allowed;
    &:hover {
        background-color: rgba($color1, 0.6) !important;
    }
}
.delete {
    background-color: rgba($button-delete-color, 0.6);
        &:hover {
        background-color: $button-delete-color !important;
    }
}

</style>