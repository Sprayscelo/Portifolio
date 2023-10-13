<template>
  <div id="gamesConfigRoot">
    <div id="tittleContainer">
      <h3>Game selection</h3>
      <slot id="removeGame"></slot>
    </div>
    <div class="gamesConfigContainer">
      <div>
        <p>Plase select a game</p>
        <div class="selectButtonRoot">
          <input
            required
            type="text"
            v-model="gameSearched"
            placeholder="Type a game name..."
            id="gameSearchedInput"
          />
          <div
            v-if="gamesFounded.length > 1"
            :class="`dropDownButtonContainer ${
              dropTransition ? 'dropAnimation' : ''
            }`"
          >
            <ul v-for="item in gamesFounded" :key="item.id" ref="configs">
              <img
                @load="spinner = false"
                v-if="item.url"
                :src="item.url"
                alt=""
              />
              <img v-else :src="noUrlFounded" alt="" />
              <li @click="selectGame(item.name)">{{ item.name }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p>How much fps you want to run?</p>
        <input
          required
          type="number"
          v-model="gameFps"
          placeholder="FPS quantity"
        />
      </div>
      <div>
        <p>Please select the quality</p>
        <select v-model="gameQuality">
          <option name="Low" id="Low" value="Low">Low</option>
          <option name="Medium" id="Medium" value="Medium">Medium</option>
          <option name="High" id="High" value="High">High</option>
          <option name="Ultra high" id="UltraHigh" value="Ultra high">
            Ultra High
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import nourl from "@/static/no_url_founded.jpeg";

export default {
  name: "gamesConfig",
  data() {
    return {
      gameSearched: this.gamesConfig.gameSearched ?? "",
      gamesFounded: "",
      gameFps: this.gamesConfig.gameFps ?? "",
      gameQuality: this.gamesConfig.gameQuality ?? "Low",
      noUrlFounded: nourl,
    };
  },
  props: ["gamesConfig"],
  methods: {
    async searchGames(endpoint, query) {
      //Always send the same header for this call, dont need to put on the parameter when calling.
      try {
        const response = await axios.post(
          `${process.env.VUE_APP_BACKEND_URL}/api/${endpoint}`,
          query,
          { headers: { "Content-Type": "text/plain" } }
        );
        return response.data;
      } catch (error) {
        console.log(
          `Erro on endpoint calling - Endpoint: ${endpoint} / Erro: ${error}`
        );
        throw error;
      }
    },
    selectGame(game) {
      this.gameSearched = game;
      this.gamesFounded = "";
    },
    getData() {
      return {
        gameSearched: this.gameSearched,
        gameFps: this.gameFps,
        gameQuality: this.gameQuality,
      };
    },
    clearCard() {
      this.gameSearched = "";
      this.gameFps = "";
      this.gameQuality = "Low";
    },
  },
  watch: {
    gameSearched(nv) {
      clearTimeout(this.timeout);
      if (!nv) return;

      this.timeout = setTimeout(async () => {
        try {
          const gamesData = await this.searchGames(
            "games",
            `fields name, artworks; where platforms = (6) & name ~ *"${nv}"*;`
          );
          const screenShotsIds = gamesData
            .map((art) => (art?.artworks ? art.artworks[0] : null))
            .filter((art) => art);
          if (screenShotsIds.length) {
            const result = await this.searchGames(
              "artworks",
              `fields url, game; where id = (${screenShotsIds.join(",")});`
            );
            gamesData.map((element) => {
              element.url =
                result.find((link) => link.game == element.id)?.url ?? "";
              return element;
            });
          }
          this.gamesFounded = gamesData;
        } catch (error) {
          console.log("Erro ao pesquisar jogos:", error);
        }
      }, 500);
    },
  },
};
</script>
<style scoped lang="scss" name="card-styles">
@import "@/static/variables.scss";

#gamesConfigRoot {
  background-color: black;
  border-radius: 10px;
  border: 2px solid hsl(0, 0%, 0%, 30%);
  background: whitesmoke;
  font-weight: 500;
  h3 {
    display: inline-block;
    margin: 0px;
    margin-bottom: 0.5em;
    text-align: center;
  }
  .gamesConfigContainer {
    position: relative;
    p {
      font-size: 0.9em;
      margin-top: 0px;
      margin-bottom: 7px;
    }
    > div {
      position: relative;
      margin-bottom: 1em;
      input {
        position: relative;
        color: black;
        border-radius: 5px;
        border: solid 1px gray;
        text-indent: 3px;
        height: 1.2rem;
        font-family: "Montserrat", sans-serif;
        padding: 5px;
        width: 96%;
      }
      input:hover {
        outline: none;
        box-shadow: 15px 0px 15px -10px;
        transition: all 0.2s ease-in;
      }
    }
    select {
      border-radius: 5px;
      padding: 3px;
      text-align: center;
      border: 1px solid black;
    }
  }
}

#tittleContainer {
  display: grid;
  grid-template-columns: 1fr 25px;
  place-items: center;
  gap: 10px;
}
</style>

<style scoped lang="scss" name="dropdown-styles">
.dropAnimation {
  animation: dropdown 1s ease-in-out none;
}
.selectButtonRoot {
  position: relative;
  .dropDownButtonContainer {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    max-height: 155px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: whitesmoke;
    border-radius: 5px;
    z-index: 1;
  }

  @keyframes dropdown {
    0% {
      height: 0px;
    }
    100% {
      height: min-content;
    }
  }
  ul {
    display: flex;
    justify-content: flex-start;
    gap: 5px;
    list-style: none;
    padding: 0px 5px 0px 0px;
    margin: 0;
    text-align: center;
    img {
      display: inline-block;
      width: 15px;
      height: 15px;
      flex-grow: 0;
      align-self: center;
      margin-left: 10px;
    }
    li {
      position: relative;
      color: black;
      text-indent: 3px;
      font-family: "Montserrat", sans-serif;
      padding: 5px;
      width: 100%;
      cursor: pointer;
    }
    li:hover {
      background-color: #8eb1c7;
      transition: all 0.1s ease-in-out;
    }
  }
}

.dropDownButtonContainer::-webkit-scrollbar {
  width: 6px;
}

.dropDownButtonContainer::-webkit-scrollbar-thumb {
  background-color: rgb(140, 210, 228);
  border-radius: 5px;
}
</style>
