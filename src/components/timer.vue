<template>
    <div class="timer">
        {{ minutes }} : {{ seconds }}

    </div>
</template>
<script>
    export default {
        name: 'AppTimer',
        data() {
            return {
                minutes: '10',
                seconds: '00',
                ms: 600000,
            }
        },
        mounted() {

            let timeId = setInterval(() => {
                if(this.ms === 0) {
                    clearInterval(timeId)
                }
                this.minutes = parseInt(this.ms / 60000)

                if(this.minutes.toString().length < 2) {
                    this.minutes = '0'+ parseInt(this.ms / 60000)
                }

                this.seconds = this.ms % 60000 / 1000
                if(this.seconds.toString().length <2) {
                    this.seconds = '0' + this.ms % 60000 / 1000
                }

                //console.log(this.minutes, this.seconds)
                this.ms -= 1000
            }, 1000)



        }
}
</script>
<style lang="scss">
.timer {
    display: inline-block;
    color: #3BDE7C;
    font-family: 'PT Serif';
    font-weight: 400;
    font-size: 1.25em;
    line-height: 1.875em;
    text-align: center;
    letter-spacing: 0.1em;

}


</style>