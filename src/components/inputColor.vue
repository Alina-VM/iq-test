<template>
    <AppProgressBar/>
    <div class="input-color">
        <div class="input-color__quest">{{ question.question }}</div>
        <div class="input-color__answers">
                <div class="input-color__answer" v-for="answer in question.answers" :key="answer"
                 @click="setAnswer(answer)">
                    <div class="color-block" :class="{'checked-box' : answer === currentAnswer}" :style="{backgroundColor: answer}"></div>

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
        name: 'AppInputColor',
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
                console.log(answer)
                this.currentAnswer = answer;
            },
        }

    }
</script>
<style lang="scss" scoped>
.input-color {
    color: #FFFFFF;
    font-family: 'PT Serif';
    font-weight: 400;
    letter-spacing: 0.05em;
    &__quest {
        font-size: 1.25em;
        line-height: 1.625em;
        text-align: center;
        margin-bottom: 2.625em;
        padding: 0 1.25em;
    }

    &__answers {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        //padding: 0 1.4375em;
        align-items: center;
        margin: 0 auto;
    }
    &__answer{
        margin: 0.625em;
        //margin-right: 1.3125em;
        display: flex;
        align-items: center;
        //max-height: 78px;
    }
}
.color-block {
    cursor: pointer;
    //appearance: none;
    //color: #FFFFFF;
    width: 75px;
    height: 75px;
    padding: 0;
    //outline: none;
    //margin-left: 2.1875em;
}
.checked-box {
    outline: solid 6px #FFC700 ;

}

</style>