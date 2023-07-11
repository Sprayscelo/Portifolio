<template>
  <div id="pcBuilderAiRoot">
    <div class="pcBuilderAiMainContainer backgroundContainer">
      <h1 class="center">Welcome to pc builder AI</h1>
      <h2>Please select the games, quality and how much fps you want to run!</h2>
      <p>Pc specs will be shown here</p>
      <div class="pcSpecsContainer">
        <img id="pcBuilderLogo" src="@/static/pc_builder_logo.png" alt="">
        <ul>
          <li>Processor: {{pcConfig.processor}}</li>
          <li>RAM memory: {{pcConfig.ram}}</li>
          <li>Video card: {{pcConfig.videoCard}}</li>
          <li>Powersupply: {{pcConfig.powerSupply}}</li>
          <li>Motherboard: {{pcConfig.motherboard}}</li>
          <small>
            {{ pcConfig.obs }}
          </small>
        </ul>
      </div>
      <div class="configContainer">
        <div class="pcBuilderLogoContainer">
          
        </div>
        <div class="gameConfigContainer">
          <gamesConfig>
          </gamesConfig>
          <gamesConfig>
          </gamesConfig>
          <gamesConfig>
          </gamesConfig>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CryptoJS from 'crypto-js';
import axios from "axios";
// import moment from "moment";
import gamesConfig from '@/components/pcBuilderAi/gamesConfig.vue'

export default {
  
  name: "pcBuilderAi",
  data() {
    return {
      token: "",
      tokenExpireTime: null,
      lastRequest: null,
      pcConfig: {
        processor: '',
        ram: '',
        videoCard:'',
        powerSupply: '',
        motherboard: '',
        obs: ''
      }
    };
  },
  components: {
    gamesConfig,
  },
  methods: {
    async callEndPointIgb() {
      //Always send the same header for this call, dont need to put on the parameter when calling.  
      try {
        const response = await axios.post('http://localhost:3000/games', '')
        console.log(response)
      }catch(error) {
        console.log('callEndPoint ERRO: ' + error)
      }
    },
  },
};
</script>

<style scoped lang="scss">

.backgroundContainer{
  background: hsla(233, 100%, 90%, 1);

  background: linear-gradient(180deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%);

  background: -moz-linear-gradient(180deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%);

  background: -webkit-linear-gradient(180deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%);
  
  border-radius: 15px;
}

.pcBuilderAiMainContainer {
  padding: 20px;
  margin-top: 20px;
  width: 70vw;
  height: fit-content;
  text-align: center;
  //animation: onload 1s ease-in-out;
  h1{
    margin: 5px;
    font-size: 2em;
    font-family: 'Rubik Mono One', sans-serif;
  }
  h2 {
    font-size: 1.1rem;
  }
}

@keyframes onload {
  0% {
    opacity: 0;
    perspective: 1000px;
  }

  100% {
    opacity: 1;
    perspective: none;
  }
}

.pcSpecsContainer {
  display: flex;
  gap: 30px;
  flex-shrink: 1;
  font-size: 1rem;
  font-weight: bold;
  p{
    margin: 0;
    font-size: 1rem;
    font-weight: bolder;
  }
  ul{
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    align-items: center;
    padding: 0;
    margin: 0;
    text-align: start;
    width: 100%;
    li {
      flex-grow: 1;
      flex-basis: 1;
      margin-bottom: 1em;
      min-height: 20px;
    }
  }
}
#pcBuilderLogo {
  display: inline-block;
  background-color: white;
  border-radius: 10px;
  padding: 5px;
  width: 40%;
  height: 30%;
}
//.pcBuilderLogoContainer {
//    margin-top: 17px;
//    min-width: 30%;
//    flex-basis: minmax(30%, 50%);
//    background-color: whitesmoke;
//    border-radius: 10px;
//    
//  }

  .gameConfigContainer {
    display: flex;
    //grid-template-columns: repeat(4, minmax(10%, 1fr));
    gap: 20px;
    flex: 1;
    > * {
      flex-grow: 1;
      padding: 10px;
    }
  }

  .center{
    display: grid;
    place-items: center;
  }
  
</style>