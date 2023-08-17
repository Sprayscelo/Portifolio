<template>
  <div id="pcBuilderAiRoot">
    <div class="pcBuilderAiMainContainer backgroundContainer">
      <h1 class="center">Welcome to pc builder AI</h1>
      <h2>Please select the games, quality and how much fps you want to run!</h2>
      <div class="pcSpecsContainer">
        <img id="pcBuilderLogo" src="@/static/pc_builder_logo.png" alt="">
        <ul>
          <li>Processor: <span :class="pcConfig.processor ? 'spanShow' : ''"> {{ pcConfig.processor}} </span></li>
          <li>RAM memory: <span :class="pcConfig.ram ? 'spanShow' : ''"> {{pcConfig.ram}} </span></li>
          <li>Video card: <span :class="pcConfig.videoCard ? 'spanShow' : ''"> {{pcConfig.videoCard}} </span></li>
          <li>Powersupply: <span :class="pcConfig.powerSupply ? 'spanShow' : ''"> {{pcConfig.powerSupply}} </span></li>
          <li>Motherboard: <span :class="pcConfig.motherboard ? 'spanShow' : ''">  {{pcConfig.motherboard}} </span></li>
          <li>
            Obs: <span :class="pcConfig.obs ? 'spanShow' : ''"> {{ pcConfig.obs }} </span>
          </li>
        </ul>
      </div>
      <div class="configContainer">
        <div class="gameConfigContainer">
          <gamesConfig v-for="game in games" :key="game.id" ref="configs">
            <svg id="removeGame" @click="removeGame(game.id)" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
              <rect width="25" height="25" rx="5" ry="5" fill="red" />
              <line x1="7" y1="7" x2="18" y2="18" stroke="white" stroke-width="3" />
              <line x1="7" y1="18" x2="18" y2="7" stroke="white" stroke-width="3" />
            </svg>
          </gamesConfig>
          <button class="add-button" @click="addGame">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
        <div class="buttonsContainer">
          <button v-if="!this.pcConfig.processor" @click=generatePc() class="generatePcButton">
            Generate PC!
          </button>
          <button @click="clear()" v-if="this.pcConfig.processor" class="generatePcButton">Generate new PC!</button>
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
      games: [{id: 0}],
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

    addGame() {
      this.games.push({id:this.games.length})
    },

    generatePc() {
      let gamesCardsInfos = this.$refs.configs.map((config) => config.getData()).filter(card => card.gameSearched && card.gameFps && card.gameQuality)
      
      if(!gamesCardsInfos.length) return alert(`Please fill up at least one card information`)
      
      this.pcConfig.processor = ' i9 9900k 3.8 Ghz'
      this.pcConfig.ram = ' 16gb RAM'
      this.pcConfig.videoCard = ' GTX 3070 TI'
      this.pcConfig.powerSupply = ' 800W'
      this.pcConfig.motherboard = ' Placa mãe de teste'
      this.pcConfig.obs = ' Esse é o PC de teste para exibir as informações!!'
    },

    removeGame(id) {
      this.games = this.games.filter(game => game.id != id)
    },

    clear() {
      for(let key of Object.keys(this.pcConfig)) {
        this.pcConfig[key] = ''
      }
      this.$refs.configs.map((config) => config.clearCard())
    }
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

  h1{
    margin: 5px;
    font-size: 2em;
    font-family: 'Rubik Mono One', sans-serif;
  }
  h2 {
    text-align: center;
    font-size: 1.1rem;
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

.add-button {
  background: linear-gradient(180deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);
  border: 2px solid hsl(0, 0%, 0%, 30%);
  border-radius: 5px;
  padding: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  flex-grow: 0;
}

.add-button:hover {
  background: whitesmoke;
}

/* Estilização do ícone */
.add-button svg {
  width: 50px;
  height: 50px;
  stroke: hsl(0, 0%, 0%, 30%);
}

.pcSpecsContainer {
  display: flex;
  gap: 30px;
  margin-bottom: 2em;
  flex-shrink: 1;
  font-size: 1rem;
  font-weight: bold;
  height: 35vh;
  width: 95vw;
  p{
    margin: 0;
    font-size: 1rem;
    font-weight: bolder;
  }
  ul{
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    padding: 0;
    margin: 0;
    text-align: start;
    width: 100%;
    li {
      display: flex;
      align-items: center;
      flex-grow: 1;
      flex-basis: 1;
      min-height: 20px;
      font-weight: bolder;
      span {
        margin-left: .3em;
        opacity: 0;
      }
      .spanShow{
        opacity: 1;
        transition: all 1s ease-out;
      }
    }
  }
}
#pcBuilderLogo {
  display: inline-block;
  background-color: white;
  border-radius: 10px;
  padding: 5px;
  min-width: 250px;
  width: 40%;
  height: 100%;
}

#pcBuilderAiRoot{
  margin: 20px;
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
    flex-wrap: wrap;
    > *:not(button) {
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: 20%;
      position: relative;
      padding: 10px;
    }
  }

  .center{
    display: grid;
    place-items: center;
  }

  .configContainer {
    text-align: center;
    .buttonsContainer {
    display: flex;
    gap: 10px;
    justify-content: center;
      .generatePcButton {
        margin-top: 20px;
        padding: 1em;
        background-color: green;
        color: whitesmoke;
        font-weight: bold;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      .generatePcButton:hover {
        background-color: black;
        transition: .3s ease-in-out
      }
      .clearButton {
        opacity: 1;
        margin-top: 20px;
        padding: 1em;
        background-color: red;
        color: whitesmoke;
        font-weight: bold;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: opacity 1s ease-out;
      }
    }
  }
   #removeGame{
    display: inline-block;
    vertical-align: middle;
    text-align: end;
    margin-bottom: 0.5em;
    margin-right: 10px;
    cursor: pointer;
  }
</style>