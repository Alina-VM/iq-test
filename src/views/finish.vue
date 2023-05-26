<template>
    <div class="finish container">
        <img src="../assets/img/lightning_PNG9.png" class="finish__decoration">
        <img src="../assets/img/lightning_PNG9.png" class="finish__decoration">
        <div class="finish__content">
            <div class="finish__title">
            Ваш результат рассчитан:
            </div>
            <div class="finish__result">
                <span>Вы относитесь к 3%</span> респондентов, чей уровень интеллекта более чем на
                15 пунктов отличается от среднего в большую или меньшую сторону!
            </div>
            <div class="finish__slogan">
                Скорее получите свой результат!
            </div>
            <div class="finish__personal-data">
                В целях защиты персональных
                данных результат теста, их подробная интерпретация и рекомендации доступны в
                виде голосового сообщения по звонку с вашего мобильного телефона
            </div>
            <div class="finish__timer">
                    <span>Звоните скорее, запись доступна всего</span>
                <AppTimer/> <span>минут</span>
            </div>
            <div class="finish__button" @click="requestToApi">
                <img src="../assets/img/phone.svg" alt="">
                <div>Позвонить и прослушать результат </div>
            </div>

            <table class="result" v-for="(value, name) in info" :key="value">
                <tr>
                    <th>{{ name }}</th>
                    <td v-if="typeof value != 'string'" >{{ value.join(', ') }}</td>
                    <td v-else>{{ value }}</td>
                </tr>
            </table>
        </div>

        <footer class="finish__footer">
            TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA
            LUI DECLARATI CA AVETI 18 ANI IMPLINITI,
            ERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA
            LUI DECLARATI CA AVETI 18 ANI IMPLINITI
            ERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA
            LUI DECLARATI CA AVETI 18 ANI IMPLINITI
        </footer>
    </div>
</template>
<script>
import AppTimer from '../components/timer.vue'
export default {
    name: 'AppFinish',
    data(){
        return {
            urlApi: 'https://swapi.dev/api/people/1/',
            info: '',

        }
    },
    components: {
        AppTimer
    },

    methods: {
        async requestToApi() {
            const response = await fetch(this.urlApi)
            const result = await response.json()
            this.info = result
        },
    }
}
</script>
<style lang="scss">
    .finish {
        height: calc(100vh);
        z-index: 1;
        overflow: scroll;
        padding-top: 1.125em;
        background-image: url(../assets/img/bg-stars.png);
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        &__content {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1 1 auto;
        }
        &__title {
            font-family: 'PT Serif';
            font-weight: 700;
            font-size: 0.9375em;
            line-height: 1em;
            text-align: center;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #FFFFFF;
            margin-bottom: 0.8125em;
        }

        &__result {
            font-family: 'PT Serif';
            font-weight: 400;
            font-size: 0.875em;
            line-height: 1.125em;
            text-align: center;
            letter-spacing: 0.1em;
            color: #FFFFFF;
            margin-bottom: 1.375em;
            & span {
                text-decoration: underline;
            }
        }

        &__slogan {
            font-family: 'PT Serif';
            font-weight: 700;
            font-size: 1.125em;
            line-height: 1.375em;
            text-align: center;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #3BDE7C;
            margin-bottom: 0.8125em;
        }

        &__personal-data {
            background-color: #1C2741;
            color: white;
            border-radius: 6px;
            font-family: 'Roboto';
            text-transform: uppercase;
            font-weight: 500;
            font-size: 0.5em;
            line-height: 1.920em;
            letter-spacing: 0.355em;
            width: 256px;
            height: 114px;
            text-align: center;
            padding: 0.9375em 0.75em 0.6875em;
        }

        &__timer {
            text-align: center;
            span {
                font-family: 'PT Serif';
                font-weight: 400;
                font-size: 0.6875em;
                line-height: 1.875em;
                text-align: center;
                letter-spacing: 0.1em;
                margin: 0 30px;
                color: #3BDE7C;
            }
        }

        &__button {
            cursor: pointer;
            display: flex;
            align-items: center;
            background-color: red;
            color: white;
            border-radius: 6px;
            font-family: 'Roboto';
            font-weight: 900;
            font-size: 0.9375em;
            line-height: 1.125em;
            letter-spacing: 0.05em;
            justify-content: center;
            min-width: 290px;
            min-height: 92px;
            text-align: left;
            padding-left: 15px;
            padding-right: 22px;
            margin-bottom: 0.8125em;

            & img {
                margin-right: 1.125em;
            }
        }

        &__decoration {
            position: absolute;
            &:first-child {
                transform: rotate(-60deg);
                bottom: 110px;
                left: -72px;
                overflow: hidden;
                z-index: -1;
            }
            &:nth-child(2){
            transform: rotate(-18deg);
            bottom: 86px;
            right: -29px;
            overflow: hidden;
            z-index: -1;
        }
        }

        &__footer {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 0.4375em;
            line-height: 1.5625em;
            text-align: center;
            letter-spacing: 0.1875em;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.5);
            padding: 0 15px;
        }
        .result {
            color: white;
        }
        table {
            width: 100%;
            border: 1px solid white;
            border-collapse: collapse;
            margin-bottom: 10px;
            font-size: 0.75em;
        }
        th {
            width: 27%;
            border-right: 1px solid white;
            padding: 4px;
        }
        td {
            max-width: 73%;
            word-wrap: break-word;
            padding: 4px 4px 0 4px;
        }
        td, th {

            text-align: left;
        }
}

</style>