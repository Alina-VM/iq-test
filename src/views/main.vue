<template>
    <div class="main">
        <div class="wrapper">
            <div class="first-screen container">
                <div class="first-screen__subtitle">
                    Пройдите точный и быстрый
                </div>
                <div class="first-screen__title">
                    ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ
                </div>
                <img class="first-screen__logo" src="../assets/img/logo.svg" alt="">
                <AppButtonTest/>
                <div class="first-screen__description">
                <span>И получите рекомендации
                    по развитию своего интеллекта</span> <br>
                    и улучшению финансового благосостояния и личной жизни
                </div>
                <a href="#second-block">
                    <div class="first-screen__more">
                        <img src="../assets/img/arrow-up.svg" alt="">
                        <div>Подробнее</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="quote-block" id="second-block">
            <img src="../assets/img/“.svg" alt="">
            <div class="quote-block__text">
                Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта,
                но и выработать список рекомендаций для повышения этого показателя.
            </div>
            <div>
                <img src="../assets/img/“.svg" alt="">
            </div>

        </div>
        <div class="description-block container">
            <div class="description-block__text">
                Также по результатам теста
                <span>вы получите</span> подробные <span>советы</span> по определению наиболее перспективной <span>для вашего типа интеллекта
                сферы деятельности</span>, которая принесет вам скорейший финансовый результат.
            </div>
            <div class="description-block__picture">
                <img src="../assets/img/brain-pic.png" alt="">
            </div>
            <AppButtonTest/>
        </div>
        <div class="wrapper">
            <img src="../assets/img/lightning_PNG9.png" class="wrapper__decoration">
            <img src="../assets/img/lightning_PNG9.png" class="wrapper__decoration">
            <div class="last-block container">
                <div class="last-block__text">
                    Прохождение теста займет у вас не более <span>12 минут</span>, а его результаты вы
                    сможете <span>использовать всю жизнь.</span>
                </div>
                <div class="last-block__main-text">
                    <div class="text">Профессиональная интерпретация и детально <b>проработанные рекомендации</b>
                    позволят вам качественно <b>изменить все аспекты своей жизни</b>: от финансового до любовного.
                    </div>
                </div>
                <AppButtonTest class="test-button--transparent"/>
                <div class="copyright">
                    <img src="../assets/img/copyright.svg" alt="">
                    2019
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AppButtonTest from '../components/buttonTest.vue'
    export default {
        name: 'AppMain',
        components: {
            AppButtonTest,
        },
    }
</script>
<style lang="scss" >
.main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.wrapper {
    background-image: url(../assets/img/bg-stars.png);
    position: relative;
    width: 100%;
    &__decoration {
        position: absolute;
        &:first-child {
            right: 0;
            top: 58px;
        }
        &:nth-child(2){
            //transform: scaleX(-1);
            transform: rotate(-60deg);
            bottom: -6px;
            left: -65px;
            overflow: hidden;
        }
    }
}
.first-screen {

    padding-top: 27px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 11px;
    height: calc(100vh - 50px);
    &__subtitle {
        font-family: 'PT Serif';
        font-weight: 400;
        font-size: 1.125em;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: white;
        //margin-bottom: 2.5em;
    }
    &__title {
        font-family: 'Yeseva One';
        font-weight: 400;
        font-size: 1.875em;
        line-height: 35px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #FFC700;
        text-align: center;
        padding: 0 1em;
    }
    &__logo {
       width: 190px;
    }

    &__description {
        font-family: 'PT Serif';
        font-weight: 700;
        font-size: 0.9375em;
        line-height: 19px;
        text-align: center;
        letter-spacing: 0.05em;
        color: white;
        padding: 0 1em;
        & span {
            color:#FFC700;
        }
    }

    &__more {
        display: flex;
        flex-direction: column;
        color: white;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        font-size: 0.5em;
        line-height: 11px;
        text-align: center;
        letter-spacing: 0.05em;
        cursor: pointer;
        & img {
            margin-bottom: 5px;
        }
    }
}
.quote-block {
    padding: 43px 25px 32px;
    background-image: url(../assets/img/quote-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    & img:first-child {
        margin-bottom: 17px;
    }
    & div:last-child {
        & img {
            transform: rotate(-180deg);
        }
        text-align: right;
    }

    &__text {
        background: radial-gradient(84.34% 50.29% at 48.75% 49.71%,
        #2950C2 0%, rgba(38, 91, 199, 0.96) 40.62%, rgba(39, 98, 187, 0) 85.42%);
        text-align: center;
        font-family: 'Yeseva One';
        font-weight: 400;
        font-size: 1.125em;
        line-height: 23px;
        letter-spacing: 0.05em;
        color: white;
        padding: 0 1em;
    }
}
.description-block {
    padding-top: 2.375em;
    padding-bottom: 2.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #f3f3f2;
    &__text {
        font-family: 'PT Serif';
        font-weight: 400;
        font-size: 1em;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: #272727;
        text-align: left;
        margin-bottom: 2.375em;
        & span {
            text-transform: uppercase;
            font-weight: 700;
        }

    }
}

.last-block {
    padding-top: 3.5em;
    padding-bottom: 0.8125em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
&__text {
    text-align: left;
    font-family: 'Merriweather';
    font-weight: 400;
    font-size: 0.9375em;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    margin-bottom: 0.875em;
    & span {
        color: #FFC700;
        font-weight: 900;
    }
}

&__main-text {
    margin-bottom: 2.0625em;
    background-color: #f3f3f2;
    opacity: 0.7;
    border-radius: 20px;
    padding: 1.8125em 0.9375em 1.9375em  0.875em;
    & .text {
        text-align: left;
        font-family: 'Merriweather';
        font-weight: 400;
        font-size: 1em;
        line-height: 23px;
        letter-spacing: 0.05em;
        color: #181818;
    }
}
}
.copyright {
    display: flex;
    color: #737375;
    font-family: 'Roboto';
    font-size: 0.625em;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.05em;
    line-height: 23px;
    margin-top: 3.25em;
    & img {
        margin-right: 0.5em;

    }
}


</style>