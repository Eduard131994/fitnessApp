<template>
    <header>
        <div id="logo">
            <img src="" alt="Logo">
        </div>
        <div class="links">
            <ul>
                <li><router-link :to="'home'">Home</router-link></li>
                <li><router-link :to="'foods'">Foods</router-link></li>
                <li><router-link :to="'recepies'">Recepies</router-link></li>
                <li><router-link :to="'plan'">Plan</router-link></li>
            </ul>
        </div>
    </header>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';
    header{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        align-items: center;
        background: $color1;
        color: $white;
    }

    .links {
        display: flex;
        ul {
            margin: 0;
            list-style-type: none;
        }
        li {
            display: inline-block;
            margin: 0 20px;
            padding: 10px;
            a{
                text-decoration: none;
                width: 100%;
                height: 100%;
                color: $white;
            }
        }
    }

</style>