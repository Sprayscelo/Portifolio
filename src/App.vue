<template>
  <div id="app">
    <homePage/>
    <transition name="fade"> 
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import homePage from '@/components/homePage.vue'
  import { onMounted } from 'vue';
  
  export default {
    name: 'app',
    data() {
      return {
        transform: false
      }
    },
    components: {
      homePage,
    },
    setup() {
      onMounted(() => {
        this.transform = true
      }) 
    }
  }
</script>

<style lang="scss">
body {
  margin: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: transform .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
  transition: all .5s;
}

// .fade-enter, .fade-leave-to {
//   transform: translateX(-100%);
// }
</style>
