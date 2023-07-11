<template>
  <div id="app">
    <homePage/>
      <router-view v-slot="{Component}">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
  </div>
</template>

<script>
  import homePage from '@/components/homePage.vue'
  
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
    // setup() {
    //   onMounted(() => {
    //     this.transform = true
    //   }) 
    // }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');
@import '@/static/variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@500&family=Lato:ital,wght@1,300&family=Montserrat:wght@300&family=Quicksand:wght@500&family=Roboto:wght@500;700&display=swap');
      
body {
  background-color: $outlineHeader;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
}

.fade-enter-active, .fade-leave-active {
  opacity: 1;
  position: absolute;
  transition: all .2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.3s;
}

.spinner {
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #ccc;
  border-radius: 50%;
  animation: spinner 1s linear infinite;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

// .fade-enter, .fade-leave-to {
//   transform: translateX(-100%);
// }
</style>
