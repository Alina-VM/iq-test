<template>
    <router-link v-if="$route.params.id < Object.keys(questions).length"
    class="next-button" :to="{name: 'test', params: {id: +$route.params.id+1}}">
        ДАЛЕЕ
    </router-link>
    <router-link v-else class="next-button" :to="{name: 'process-result'}" >
        ДАЛЕЕ
    </router-link>
</template>
<script>
import questions from '../constants/questionsData.js'
    export default {
        name: 'AppButtonNext',
        data() {
            return {
                questions
            }
        }
    }
</script>
<style lang="scss">

.next-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto auto 20px auto;
    background-color: #DADADA;
    box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
    font-family: 'Merriweather', serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 17.6px;
    width: 189px;
    height: 41px;
    border-radius: 20px;
    color: #8E8E8E;
    pointer-events: none;
    &--active {
        background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);
        color: #0D0C11;
        pointer-events: unset;
    }

}

</style>