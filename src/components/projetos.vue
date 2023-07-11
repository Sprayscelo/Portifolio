<template>
  <div id="projetosRoot">
    <div id="projetosMain">
      <section v-if="$route.path == '/projetos'">
        <div class="cardsContainer">
            <router-link :to="{name: card.path}" v-for="card, index in projetos" :key="card" class="cards">
              <div :class="'cardStatus ' + getStatus(card.status)">
                <span>{{ card.status }}</span>
              </div>
              <span>
                  <strong> PROJECT {{ card.name ? card.name.toUpperCase() : index + 1 }} </strong>
              </span>
            </router-link>
        </div>
      </section>
      <div>
        <router-view>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "meus-projetos",
  data() {
    return {
      projetos: [{
        image: '',
        link: '',
        path: 'pcBuilderAi',
        name: 'Pc Builder AI',
        descricao: '',
        status: 'In progress'
      },
      {
        image: '',
        link: '',
        path: '',
        name: '',
        descricao: '',
        status: 'Soon'
      },
      {
        image: '',
        link: '',
        path: '',
        name: '',
        descricao: '',
        status: 'Soon'
      },
      {
        image: '',
        link: '',
        path: '',
        name: '',
        descricao: '',
        status: 'Soon'
      },
      {
        image: '',
        link: '',
        path: '',
        name: '',
        descricao: '',
        status: 'Soon'
      },
      {
        image: '',
        link: '',
        path: '',
        name: '',
        descricao: '',
        status: 'Soon'
      },
    ],
    };
  },
  methods: {
    getStatus(status) {
      switch(status) {
        case 'Soon': return 'soon'
        case 'Done': return 'done'
        default: return 'inProgress'
      }
    }
  },
};
</script>

<style scoped lang="scss">
@import '@/static/variables.scss';

#projetosMain {
  display: grid;
  place-items: center;
  position: absolute;
  width: 100vw;
  height: 90vh;
}

a {
  color: black;
  text-decoration: none;
}

.inProgress {
  background: hsla(208, 33%, 21%, 1);

  background: linear-gradient(0deg, hsla(208, 33%, 21%, 1) 0%, hsla(211, 36%, 46%, 1) 100%);

  background: -moz-linear-gradient(0deg, hsla(208, 33%, 21%, 1) 0%, hsla(211, 36%, 46%, 1) 100%);

  background: -webkit-linear-gradient(0deg, rgb(62, 94, 121) 0%, rgb(32, 50, 70) 100%);
}

.soon {
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgb(70, 71, 82) 0%, rgb(8, 11, 15) 90.3% );
}

.done {
  background: hsla(221, 45%, 73%, 1);

  background: linear-gradient(0deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
  
  background: -moz-linear-gradient(0deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
  
  background: -webkit-linear-gradient(0deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%);
  
}

.cardsContainer {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
  gap: 15px;
  background-color: antiquewhite;
  width: 75vw;
  border-radius: 10px;
  padding: 30px;
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgb(70, 71, 82) 0%, rgb(8, 11, 15) 90.3% );
  box-shadow: 0px 0px 15px;
  .cards {
    display: grid;
    align-items: end;
    justify-content: center;
    position: relative;
    border-radius: 10px;
    width: 100%;
    height: 35vh;
    background-color: rgb(202, 202, 202);
    color: black;
    font-weight: bold;
    span {
      margin-bottom: 15px;
    }
    .cardStatus {
      display: grid;
      place-items: center;
      align-self: center;
      position: absolute;
      bottom: 50px;
      width: 100%;
      height: 15%;
      box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.5),
              0px -5px 10px -5px rgba(0, 0, 0, 0.5);
      //background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgb(70, 71, 82) 0%, rgb(8, 11, 15) 90.3% );
      span {
        color: white;
        font-weight: bold;
        margin-bottom: 0;
        height: fit-content;
      }
    }
  }
  .cards:hover {
    transform: scale(103%);
    transition: all .3s ease-in-out;
  }
}
</style>
