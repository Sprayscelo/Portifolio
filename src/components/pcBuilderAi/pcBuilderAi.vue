<template>
  <div id="pcBuilderAiRoot">
    <div class="errorMessagesContainer">
      <alert ref="alert">
      </alert>
    </div>
    <div class="pcBuilderAiMainContainer backgroundContainer">
      <h1 class="center">Welcome to pc builder AI</h1>
      <h2>
        Please select the games, quality and how much fps you want to run!
      </h2>
      <div v-if="pcConfig.length > 1" class="pagination">
        <span
          @click="this.page = index - 1"
          v-for="index in pcConfig.length"
          :key="index"
          :class="[
            this.page === index - 1 ? 'pageActive' : '',
            !loadingPc ? `opacityPcSpecs` : ``,
          ]"
          >{{ index }}</span
        >
      </div>
      <div class="pcSpecsContainer">
        <div id="pcBuilderLogo">
          <img
            id=""
            :src="loadingPc ? loadingPcLogo : pcBuilderLogo"
            :class="loadingPc ? `loadingPc` : `imgLogoBuilder`"
            alt=""
          />
          <p v-if="loadingPc" class="">Generating PC for you, please wait...</p>
        </div>
        <ul>
          <li v-for="(pc, key) in pcConfig[this.page]" :key="key">
            <span>{{ pc.label ?? pc }}</span>
            <span
              :class="[
                loadingPc ? 'opacityControl' : '',
                pc.label ?? false ? `animationPcSpecs` : ``,
              ]"
            >
              {{ pc.value ?? ". . ." }}
            </span>
          </li>
        </ul>
      </div>
      <h3 v-if="pcConfig.length > 1">
        You have <span id="pcNumbers"> {{ pcConfig.length }} </span> options
      </h3>
      <div class="configContainer">
        <div class="gameConfigContainer">
          <gamesConfig v-for="game in games" :key="game.id" ref="configs">
            <svg
              id="removeGame"
              @click="removeGame(game.id)"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
            >
              <rect width="25" height="25" rx="5" ry="5" fill="red" />
              <line
                x1="7"
                y1="7"
                x2="18"
                y2="18"
                stroke="white"
                stroke-width="3"
              />
              <line
                x1="7"
                y1="18"
                x2="18"
                y2="7"
                stroke="white"
                stroke-width="3"
              />
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
          <button
            v-if="!this.pcConfig[0].processor ?? false"
            @click="generatePc()"
            class="generatePcButton"
          >
            Generate PC!
          </button>
          <button
            @click="generatePc()"
            v-if="this.pcConfig[0].processor"
            class="generatePcButton"
          >
            Generate new PC!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pcBuilderLogo from "@/static/pc_builder_logo.png";
import loadingPcLogo from "@/static/loadingPc.jpg";
import alert from "@/components/utilities/alert.vue";
import axios from "axios";

import gamesConfig from "@/components/pcBuilderAi/gamesConfig.vue";

export default {
  name: "pcBuilderAi",
  data() {
    return {
      token: "",
      tokenExpireTime: null,
      lastRequest: null,
      games: [{ id: 0 }],
      pcConfig: [
        [
          "Processor: ",
          "Ram Memory: ",
          "Video card: ",
          "Power Supply: ",
          "Motherboard: ",
          "Obs: ",
        ],
      ],
      page: 0,
      loadingPc: false,
      loadingPcLogo: loadingPcLogo,
      pcBuilderLogo: pcBuilderLogo,
      errorStatus: {
        code: "",
        message: "",
      },
    };
  },
  components: {
    gamesConfig,
    alert,
  },
  methods: {
    addGame() {
      this.games.push({ id: this.games.length });
    },

    async generatePc() {
      let gamesCardsInfos = this.$refs.configs
        .map((config) => config.getData())
        .filter(
          (card) => card.gameSearched && card.gameFps && card.gameQuality,
        );

      if (!gamesCardsInfos.length)
        return alert(`Please fill up at least one card information`);

      this.errorStatus = {};

      this.pcConfig = [
        [
          "Processor: ",
          "Ram Memory: ",
          "Video card: ",
          "Power Supply: ",
          "Motherboard: ",
          "Obs: ",
        ],
      ];
      this.loadingPc = true;
      try {
        var responsePcConfigAi = await axios.post(
          "http://localhost:3000/openai",
          { gamesConfig: gamesCardsInfos },
        );
      } catch (error) {
        this.errorStatus.message = error.data;
        this.errorStatus.code = error.status;
        throw error;
      } finally {
        this.loadingPc = false;
      }
      console.log(responsePcConfigAi.status);
      //if(responsePcConfigAi.statusCode !== 200) return this.errorMessage =
      this.pcConfig = JSON.parse(
        responsePcConfigAi.data.message.content,
      ).pcConfig.map((pc) => {
        (pc.processor = { label: `Processor: `, value: pc.processor }),
          (pc.ram = { label: `Ram memory: `, value: pc.ram }),
          (pc.videoCard = { label: `Video card: `, value: pc.videoCard }),
          (pc.powerSupply = { label: `Power Supply: `, value: pc.powerSupply }),
          (pc.motherboard = { label: `Motherboard: `, value: pc.motherboard }),
          (pc.obs = { label: `Obs: `, value: pc.obs ? pc.obs : ". . ." });
        return pc;
      });
    },

    removeGame(id) {
      this.games = this.games.filter((game) => game.id != id);
    },
  },
};
</script>
<style scoped lang="scss" name="animations">
.opacityControl {
  animation: opc 2s infinite;
}

.animationPcSpecs {
  animation: opacityPcSpecs 1s ease-in-out;
}

.animationAlert {
  animation: alert;
  animation-duration: 2s;
}

@keyframes opacityPcSpecs {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes opc {
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

@keyframes scaleAndFade {
  100% {
    transform: scale(0.9);
    opacity: 1;
  }
  50% {
    transform: scale(0.8);
    opacity: 0.8;
  }
}

@keyframes alert {
  0% {
    display: block;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    display: none;
    opacity: 0;
  }
}

.loadingPc {
  animation: scaleAndFade 2s infinite;
}
</style>
<style scoped lang="scss">
@import "@/static/variables.scss";

.errorMessagesContainer {
  display: flex;
  justify-content: center;
}

.backgroundContainer {
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
}

h1 {
  margin: 5px;
  font-size: 2em;
  font-family: "Rubik Mono One", sans-serif;
}
h2 {
  text-align: center;
  font-size: 1.1rem;
}

.add-button {
  background: white;
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

.pagination {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  margin-bottom: 2em;
  span {
    background-color: $background;
    border-radius: 12px;
    width: 15px;
    padding: 10px;
    text-align: center;
  }
  span:hover,
  .pageActive {
    background-color: black;
    color: whitesmoke;
    transition: 0.3s;
  }
}
.pcSpecsContainer {
  display: flex;
  gap: 30px;
  margin-bottom: 2em;
  flex-shrink: 1;
  font-size: 1rem;
  height: 35vh;
  width: 95vw;
  p {
    margin: 0;
    font-size: 1rem;
    font-weight: bolder;
  }
  ul {
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
      min-height: 20px;
    }
    span:first-child {
      margin-right: 5px;
    }
    span:nth-child(2) {
      font-size: 0.9em;
    }
  }
}
h3 {
  text-align: center;
  text-decoration: underline;
  text-underline-offset: 4px;
  font-size: large;
}
#pcBuilderLogo {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  gap: 10px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  padding: 5px;
  width: 30%;
  min-width: fit-content;
  justify-content: center;
  align-items: center;
  img.imgLogoBuilder {
    min-width: 250px;
    width: 100%;
    height: 100%;
  }
  img.loadingPc {
    height: 85%;
    width: 85%;
    border-radius: 10px;
    transform: scale(0.9);
  }
  p {
    font-size: 0.7rem;
    animation: opc 2s infinite;
  }
}

#pcBuilderAiRoot {
  margin: 20px;
}
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

.center {
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
      transition: 0.3s ease-in-out;
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
#removeGame {
  display: inline-block;
  vertical-align: middle;
  text-align: end;
  margin-bottom: 0.5em;
  margin-right: 10px;
  cursor: pointer;
}
</style>
