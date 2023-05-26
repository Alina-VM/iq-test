<template>
    <div class="container burger">
        <div class="burger__cross" @click="changeBurgerState(false)">
            <img src="../assets/img/iconcross.svg" alt="">
        </div>

        <nav>
            <ul class="burger__list">
                <router-link :to="{name: 'home'}" @click="changeBurgerState(false)">
                    <li class="burger__item">ГЛАВНАЯ</li>
                </router-link>
                <li class="burger__item">ИНФОРМАЦИЯ О ТЕСТЕ</li>
                <router-link :to="{name: 'test', params: {id: 1}}" @click="changeBurgerState(false)">
                    <li class="burger__item">ПРОЙТИ ТЕСТ</li>
                </router-link>

            </ul>
        </nav>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'AppBurger',
    computed:{
        ...mapState(['showBurgerMenu'])
    },
    methods: {
        ...mapMutations(['changeBurgerState'])
    },
}
</script>

<style lang="scss" scoped>
    .burger {
        background-color: #181818;
        color: #FFFFFF;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 1em;
        line-height: 1.375em;
        height: 100vh;
        &__item {
            margin-bottom: 27px;
            cursor: pointer;
            &:hover {
                color: #F4CE0C;
            }
        }
        &__cross {
            padding-top: 18px;
            margin-bottom: 64px;
            display: flex;
            justify-content: flex-end;
            cursor: pointer;
        }
    }
</style>