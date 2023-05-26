<template>
    <AppProgressBar />
    <div class="input-default">
        <div class="input-default__quest">{{ question.question }}</div>
        <div class="input-default__answers">
                <div class="input-default__answer" v-for="answer in question.answers" :key="answer"
                :class="{'checked-field' : answer === currentAnswer}" @click="setAnswer(answer)">
                    <input  type="radio" name="input-defaul">
                    {{ answer }}
                </div>
        </div>
    </div>

        <AppButtonNext :class="{'next-button--active' : currentAnswer}" @click="currentAnswer=''"
         />
</template>
<script>
    import questions from '../constants/questionsData.js'
    import AppButtonNext from './buttonNext.vue'
    import AppProgressBar from './progressBar.vue'
    export default {
        name: 'AppInputDefault',
        data() {
            return {
                questions,
                currentAnswer: '',
            }
        },
        components: {
            AppButtonNext,
            AppProgressBar
        },
        props: {
            question: {
                type: Object,
                default: () => ({})
            }
        },

        methods: {
            setAnswer(answer) {
                this.currentAnswer = answer;

            },
        },
    }
</script>
<style lang="scss">
.input-default {
    color: #FFFFFF;
    font-family: 'PT Serif';
    font-weight: 400;
    letter-spacing: 0.05em;
    flex: 1 1 auto;
    &__quest {
        font-size: 1.25em;
        line-height: 1.625em;
        text-align: center;
        margin-bottom: 2.625em;
        padding: 0 2.25em;
    }

    &__answers {
        display: flex;
        flex-direction: column;
        height: 285px;


    }
    &__answer{
        background: rgba(242,243,243, 0.15);
        flex: 1 1 auto;
        margin-bottom: 0.5em;

        display: flex;
        align-items: center;
        max-height: 78px;
        & input {
            appearance: none;
            color: #FFFFFF;
            border-radius: 50%;
            border: solid 1px #FFFFFF;
            min-width: 20px;
            min-height: 20px;
            margin-right: 2.4375em;
            margin-left: 2.1875em;
            &:checked {
                background-color: #2950C2;
                border-color: #272727;
            }
        }

    }
}
.checked-field {
    background: #FFC700;
    color: #272727
}

</style>