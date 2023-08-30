<template>
  <div id="app">
    <homePage id="homePage" />
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import homePage from "@/components/homePage.vue";

export default {
  name: "app",
  data() {
    return {
      transform: false,
    };
  },
  components: {
    homePage,
  },
};
</script>

<style lang="scss">
@import "@/static/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Nunito:ital,wght@0,700;0,1000;1,600;1,900&family=Quicksand:wght@700&family=Rubik+Mono+One&display=swap");
#app {
  overflow-x: hidden;
  min-height: 100vh;
}

body {
  background: hsla(233, 100%, 90%, 1);

  background: linear-gradient(
    180deg,
    hsla(233, 100%, 90%, 1) 0%,
    hsla(0, 0%, 89%, 1) 100%
  );

  background: -moz-linear-gradient(
    180deg,
    hsla(233, 100%, 90%, 1) 0%,
    hsla(0, 0%, 89%, 1) 100%
  );

  background: -webkit-linear-gradient(
    180deg,
    hsla(233, 100%, 90%, 1) 0%,
    hsla(0, 0%, 89%, 1) 100%
  );

  border-radius: 15px;

  //background-color: $outlineHeader;
  font-family: "Montserrat", sans-serif;
  margin: 0;
}

body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-thumb {
  background-color: $outlineHeader;
  border-radius: 5px;
}

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  position: absolute;
  transition: all 0.2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
