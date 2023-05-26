<template>
    <AppProgressBar/>
    <div class="input-img">
        <div class="input-img__quest">{{ question.question }}</div>
        <img class="input-img__image" :src="question.image" alt="">
        <div class="input-img__answers">
                <div class="input-img__answer" v-for="answer in question.answers" :key="answer"
                 @click="setAnswer(answer)">
                    <div class="answer-block" :class="{'checked-box' : answer === currentAnswer}">
                        {{ answer }}
                    </div>
                </div>
        </div>
    </div>
    <AppButtonNext :class="{'next-button--active' : currentAnswer}" @click="currentAnswer=''"/>
</template>
<script>
    import questions from '../constants/questionsData.js'
    import AppButtonNext from './buttonNext.vue'
    import AppProgressBar from './progressBar.vue'
    export default {
        name: 'AppInputImg',
        data() {
            return {
                questions,
                currentAnswer: '',

            }
        },
        props: {
            question: {
                type: Object,
                default: () => ({})
            }
        },
        components: {
            AppButtonNext,
            AppProgressBar
        },

        methods: {
            setAnswer(answer) {
                this.currentAnswer = answer;
            },
        },
    }
</script>
<style lang="scss">
.input-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFFFFF;
    font-family: 'PT Serif';
    font-weight: 400;
    letter-spacing: 0.05em;
    &__quest {
        font-size: 1.125em;
        line-height: 1.3125em;
        text-align: center;
        margin-bottom: 2.625em;
    }

    &__answers {
        display: flex;
        justify-content: space-between;
    }
    &__answer{
        margin-bottom: 0.5em;
        display: flex;
        align-items: center;
    }
    &__image {
        // width: 173px;
        // height: 115px;
        margin-bottom: 1em;

    }
}
.answer-block {
    margin: 0.5em;
    color: #0D0C11;
    text-align: center;
    background-color: #FFFFFF;
    width: 41px;
    height: 41px;
    font-size: 1.25em;
    line-height: 2.0625em;
    cursor: pointer;
    // margin-right: 2.4375em;
    // margin-left: 2.1875em;
}
.checked-box {
    outline: solid 6px #FFC700;
}
</style>