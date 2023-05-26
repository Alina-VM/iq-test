<template>
  <AppHeader/>
  <router-view/>
</template>


<script>
import AppHeader from './components/header.vue'
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'App',
  components: {
    AppHeader,
  },
  computed:{
    ...mapState(['showHeaderForTest'])
  },
  methods: {
     ...mapMutations(['changeHeader'])
  },
  mounted() {

  }
}
</script>
<style lang="scss">
@import './scss/common.scss';

</style>
