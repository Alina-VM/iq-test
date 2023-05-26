<template>
 <div>
    <AppInputDefault v-if="currentQuestion.type === 'input'" :question="currentQuestion"/>
    <AppInputDefImg v-if="currentQuestion.type === 'inputImage'" :question="currentQuestion"/>
    <AppInputColor v-if="currentQuestion.type === 'color'" :question="currentQuestion"/>
    <AppInputImg v-if="currentQuestion.type === 'image'" :question="currentQuestion"/>
 </div>

</template>
<script>
    import questions from '../constants/questionsData.js'
    import AppInputDefault from '../components/inputDefault.vue'
    import AppInputDefImg from '../components/inputDefImg.vue'
    import AppInputColor from '../components/inputColor.vue'
    import AppInputImg from '../components/inputImage.vue'
    export default {
        name: 'AppQuestion',
        data() {
            return {
                questions,

            }
        },
        components: {
            AppInputDefault,
            AppInputDefImg,
            AppInputColor,
            AppInputImg
        },
        computed: {
            id() {
                return this.$route.params.id
            },
            currentQuestion () {
                return this.questions[this.id]
            },
        },
        // mounted() {
        //     console.log(questions)
        //     console.log(questions[this.id])
        // },
        // created () {
        //     this.questions = questions
        // }
    }
</script>