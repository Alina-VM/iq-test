<template>

        <div class="progress-bar">
            <div class="progress-bar__scale" :style="countProgress"></div>
        </div>

</template>
<script>
    import questions from '../constants/questionsData.js'
    export default {
        name: 'AppProgressBar',
        data() {
            return {
                questions
            }
        },
        computed: {
            countProgress() {
                let keys = Object.keys(this.questions).length+1
                if(this.$route.name === 'process-result') {
                    return { width: '100%' }
                }
                return { width: +(100/keys * this.$route.params.id) + '%' }
            }
        },
    }
</script>
<style lang="scss">
    .progress-bar {
        margin-top: 1.0625em;
        margin-bottom: 6.25em;
        min-width: 258px;
        height: 11px;
        background-color: #F2F3F3;
        border-radius: 20px;
        margin-left: 30px;
        margin-right: 30px;
        &__scale {
            width: 16px;
            height: 11px;
            background-color: #3BDE7C;
            border-radius: 20px;
        }
    }
    .full-progress {
        width: 100%;
    }
</style>