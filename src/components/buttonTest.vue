<template>
    <router-link :to="{name: 'test', params: {id: 1}}">
        <button type="button" class="test-button">ПРОЙТИ ТЕСТ</button>
    </router-link>

</template>
<script>


    export default {
        name: 'AppButtonTest',
    }
</script>
<style lang="scss">

.test-button {
    background-color: #FFC700;
    font-family: 'Merriweather', serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 17.6px;
    width: 189px;
    height: 41px;
    border-radius: 20px;
    &--transparent button{
        border: solid 1px white;
        color: white;
        background-color: transparent;

    }

}

</style>