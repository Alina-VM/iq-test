<template>
    <div class="container header">
        <img v-show="!showBurgerMenu" class="header__menu" src="../assets/img/menu.svg" alt="" @click="changeBurgerState(true)">
        <div  v-if="$route.name === 'test' || $route.name === 'process-result'" class="test-header">
            <img src="../assets/img/logo.svg" alt="">
            <div>ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</div>
        </div>
        <div  v-else-if="$route.name === 'finish'" class="test-header">
            <img src="../assets/img/logo.svg" alt="">
            <div v-if="$route.name === 'finish'" class="test-header__finish">ГОТОВО!</div>
        </div>

    </div>
    <AppBurger v-show="showBurgerMenu"/>

</template>
<script>
import AppBurger from './burger.vue'
import { mapState, mapMutations } from 'vuex';
    export default {
        name: 'AppHeader',
        components: {
            AppBurger,
        },
        computed:{
            ...mapState(['showBurgerMenu'])
        },
        methods: {
            ...mapMutations(['changeBurgerState'])
        },
    }
</script>
<style lang="scss">
    .header {
        background-color: #181818;
        display: flex;
        align-items: center;
        &__menu {
            padding: 17px 0;
            cursor: pointer;
            margin-right: 0.5625em;
        }
    }
    .test-header {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-family: 'Yeseva One';
        font-weight: 400;
        font-size: 0.75em;
        line-height: 0.875em;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #FFC700;
        & img {
            width: 48px;
            height: 47px;
            margin-right: 0.5625em;
        }
        &__finish {
            font-size: 1.25em;
            text-transform: uppercase;

            margin-left: 1.5em;
        }
    }
</style>