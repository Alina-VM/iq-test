<template>
    <div class="test-wrapper">

        <AppQuestion class="test-wrapper__content"/>

    </div>

</template>
<script>

import AppQuestion from '../components/question.vue'

    export default {
        name: 'AppTest',
        data() {
            return {

            }
        },
        components: {
    AppQuestion,
},

    }

</script>
<style lang="scss" scoped>
    .test-wrapper {
        margin: 0 auto;
        background-image: url(../assets/img/bg-stars.png);
        height: calc(100vh - 50px);
        display: flex;
        flex-direction: column;
        align-items: center;
        &__content {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            width: 100%;
        }
    }

</style>