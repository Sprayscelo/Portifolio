<template>
  <div id="gamesConfigRoot">
    <div class="gamesConfigRoot">
      <h3>Game selection</h3>
    </div>
    <div>
      <p> Plase select a game </p>
      <dropdown class="dropdown" @clicked="gameSelected" :arrayList="gamesFounded" searchKey="name">
        <input type="text" v-model="gameSearched" placeholder="Type a game name...">
      </dropdown>
      <br>
      <!-- <div>
        <div v-if="this.gamesFounded">
          <div v-for="games in this.gamesFounded" :key="games.name">
            <img :src="games.url ? games.url : noUrlFounded" alt="">
            <span> {{ games.name }} </span>
          </div>
        </div>
      </div> -->
      <div>
        <p>Please select any game</p>
        <input type="text" v-model="gameFps">
      </div>
      <div>
        <p>Please select the quality</p>
        <select value="Teste">
          <option name="Low" id="Low" value="Low"> Low </option>
          <option name="Medium" id="Medium" value="Medium"> Medium </option>
          <option name="High" id="High" value="High"> High </option>
          <option name="Ultra high" id="UltraHigh" value="Ultra high">Ultra High</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import nourl from '@/static/no_url_founded.jpeg'
import dropdown from '@/components/utilities/dropdown.vue'

export default {
  name: "gamesConfig",
  data() {
    return {
      gameSearched: "",
      gamesFounded: "",
      gameFps: "",
      gameQuality: "",
      noUrlFounded: nourl,
      pcConfig: {
        processor: '',
        ram: '',
        videoCard:''

      }
    };
  },
  components: {
    dropdown
  },
  methods: {
    async searchGames(endpoint, query) {
      console.log(query);
      //Always send the same header for this call, dont need to put on the parameter when calling.
      try {
        const response = await axios.post(
          `http://localhost:3000/${endpoint}`,
          query,
          { headers: { "Content-Type": "text/plain" } }
        );
        return response.data;
      } catch (error) {
        console.log("callEndPoint ERRO: " + error);
        throw error;
      }
    },
    gameSelected(game) {
      this.gameSearched = game
      console.log(game)
    }
  },
  watch: {
    gameSearched(nv) {
      clearTimeout(this.timeout);
      if(!nv) return this.gamesFounded = ''

      this.timeout = setTimeout(async () => {
        try {
          const gamesData = await this.searchGames(
            "games",
            `fields name, artworks; where platforms = (6) & name ~ *"${nv}"*;`
          );
          const screenShotsIds = gamesData.map(art => art?.artworks ? art.artworks[0] : null).filter(art => art)
          if(screenShotsIds.length) {
            const result = await this.searchGames(
                        "artworks",
                        `fields url, game; where id = (${screenShotsIds.join(',')});`
                      );
            gamesData.map(element => {
                element.url = result.find(link => link.game == element.id)?.url ?? ''
                return element
            });
          }
          this.gamesFounded = gamesData
          console.log(gamesData)
        } catch (error) {
          console.log("Erro ao pesquisar jogos:", error);
        }
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
  #gamesConfigRoot {
    position: relative;
    background-color: white;
    border-radius: 10px;
    border: 2px solid hsl(0, 0%, 0%, 30%);
    background: linear-gradient(180deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%);
  }

  input {
    color: black;
    border-radius: 5px ;
    border: solid 1px gray;
    text-indent: 3px;
    height: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    padding: 5px;
    width: 90%;
}
  input:focus {
      outline: none;
      box-shadow: 0px 0px 3px 0px;
      transition: all 0.2s ease-in;
  }

</style>
