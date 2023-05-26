<template>
    <div class="process-block container">
        <AppProgressBar />
        <div class="process-block__title">
            Обработка результатов
        </div>
        <AppLoader class="process-block__loader"/>
        <div class="process-block__description">
            Определение стиля мышления...........
            .... ...................................................
        </div>
    </div>

</template>
<script>
import AppLoader from '../components/loader.vue'
import AppProgressBar from '../components/progressBar.vue'
    export default {
        name: 'AppResultProcess',
        components: {
            AppLoader,
            AppProgressBar
        },
        created() {
            setTimeout(() => {
                this.$router.push({name: 'finish'})
            }, 5000)
        }
    }
</script>
<style lang="scss">
.process-block {
    margin: 0 auto;
    background-image: url(../assets/img/bg-stars.png);
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;

        &__title {
            color: white;
            font-family: 'PT Serif';
            font-weight: 400;
            font-size: 1.4375em;
            line-height: 1.875em;
            text-align: center;
            letter-spacing: 0.05em;
            margin-bottom: 2.0625em;
        }

        &__loader {
            margin-bottom: 5.75em;
        }

        &__description {
            color: white;
            font-family: 'PT Serif';
            font-weight: 400;
            font-size: 0.875em;
            line-height: 1.1875em;
            letter-spacing: 0.05em;
            text-align: center;
        }
}

</style>