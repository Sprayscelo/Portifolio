<template>
  <div id="layoutRoot">
    <section name="Show layouts" class="layoutsContainer">
      <div class="layoutCards-bw" @click="loadLayout(layout.name)">
        <span v-if="!this.editMode">{{ layout.name }}</span>
        <input
          @input="limitCharacter(18, `newLayoutName`)"
          v-if="this.editMode"
          type="text"
          v-model="newLayoutName"
        />
        <div id="optionsContainer">
          <div v-if="this.editMode">
            <span
              @click="editLayoutName(this.layout.name)"
              @keyPress="editLayoutName(this.layout.name)"
              class="material-symbols-outlined"
              type="submit"
            >
              check
            </span>
            <span
              @click="editLayoutName(this.layout.name, false)"
              class="material-symbols-outlined negative"
            >
              cancel
            </span>
          </div>
          <span
            @click="this.editMode = true"
            v-if="!this.editMode"
            class="material-symbols-outlined"
          >
            edit
          </span>
          <span
            @click="deleteLayout(this.layout.name)"
            class="material-symbols-outlined negative"
          >
            delete
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "pc-layouts",
  data() {
    return {
      editMode: false,
      newLayoutName: ``,
    };
  },

  props: ["layout"],
  methods: {
    loadLayout(name) {
      this.$emit("layoutConfig", {
        name: name,
        pcConfig: this.layout.pcConfig,
        games: this.layout.games,
      });
    },

    editLayoutName(name, action = true) {
      console.log(name, action);
      if (action === false) return (this.editMode = false); // this.$emit("editEvent", false),;
      const layout = this.layout;
      layout.name = this.newLayoutName;
      const getLayouts = JSON.parse(localStorage.getItem(`layouts`)).filter(
        (layout) => layout.name !== name
      );
      localStorage.setItem("layouts", JSON.stringify([...getLayouts, layout]));
      //this.$emit("editEvent", false);
    },

    deleteLayout(name) {
      let getLayouts = JSON.parse(localStorage.getItem(`layouts`));
      let deletingLayout = getLayouts.filter((layout) => layout.name !== name);
      this.$emit("deletedLayout", deletingLayout);
      localStorage.setItem(`layouts`, JSON.stringify(deletingLayout));
    },

    limitCharacter(limitNumber, key) {
      console.log(this[key].length, limitNumber);
      if (+this[key].length >= +limitNumber) {
        console.log("entrou aqui");
        this.$emit("alert", {
          message: `You are not allowed to put more than ${limitNumber} characters on this input`,
          type: `warning`,
        });
        this[key] = this[key].slice(0, limitNumber - 1);
        console.log(this[key]);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../static/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Nunito:ital,wght@0,700;0,1000;1,600;1,900&family=Quicksand:wght@700&family=Rubik+Mono+One&family=Varela+Round&display=swap");

#layoutRoot {
  width: 200px;
  section {
    display: flex;
    justify-content: center;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    input {
      border: none;
      outline: none;
      box-shadow: rgb(74, 74, 74) 0px 1px 2px 0px,
        rgb(84, 84, 84) 0px 1px 3px 1px;
      border-radius: 10px;
      margin-left: 10px;
      margin-right: 10px;
      padding: 5px;
      font-family: "Varela Round", sans-serif;
      font-weight: bold;
      text-indent: 10px;
    }
  }
}

#optionsContainer {
  display: flex;
  gap: 5px;
  margin: 0.4rem;
  position: absolute;
  top: 0;
  right: 0;
  span {
    cursor: pointer;
    font-size: 1.1rem;
  }
  .negative {
    color: red;
  }
}

.layoutCards-bw {
  position: relative;
  border-style: none;
  height: 90px;
  margin-left: 10px;
  border-radius: 15px;
  color: black;
  font-weight: bolder;
  box-shadow: skyblue;
  font-family: "Varela Round", sans-serif;
  background-color: whitesmoke;
  cursor: pointer;
}

.layoutCards-bw:hover,
.layoutCards-bw:focus-within,
.layoutCards-bw:has(input) {
  background-color: #08090a;
  color: white;
  transition: all 0.6s ease;
}

.errorMessagesContainer {
  display: flex;
  justify-content: center;
}
</style>
