<template>
    <AppProgressBar/>
    <div class="input-defimg">
        <div class="input-defimg__quest">{{ question.question }}</div>
        <img class="input-defimg__image" :src="question.image" alt="">
        <div class="input-defimg__answers">
                <div class="input-defimg__answer" v-for="answer in question.answers" :key="answer"
                :class="{'checked-field' : answer === currentAnswer}" @click="setAnswer(answer)">
                    <input  type="radio" name="input-defimg">
                    {{ answer }}
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
        name: 'AppInputDefImg',
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
.input-defimg {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFFFFF;
    font-family: 'PT Serif';
    font-weight: 400;
    letter-spacing: 0.05em;
    &__quest {
        font-size: 1em;
        line-height: 1.3125em;
        text-align: center;
        margin-bottom: 2.625em;
    }

    &__answers {
        display: flex;
        flex-direction: column;
    }
    &__answer{
        background: rgba(242,243,243, 0.15);
        height: 50px;
        margin-bottom: 0.5em;
        display: flex;
        align-items: center;
        & input {
            appearance: none;
            color: #FFFFFF;
            border-radius: 50%;
            border: solid 1px #FFFFFF;
            width: 20px;
            height: 20px;
            margin-right: 2.4375em;
            margin-left: 2.1875em;
            &:checked {
                background-color: #2950C2;
                border-color: #272727;
            }
        }

    }
    &__image {
        // width: 173px;
        // height: 115px;
        margin-bottom: 1em;

    }
}
.checked-field {
    background: #FFC700;
    color: #272727
}
</style>