<template>
  <div id="projetosRoot">
    <div id="projetosMain" v-if="$route.path === `/projetos`">
      <cardProjects v-for="projeto, index in projetos" :key="index"
        :image="projeto.image"
        :link="projeto.link"
        :path="projeto.path"
        :name="projeto.name"
        :description="projeto.description"
        :status="projeto.status"
        :documentation="projeto.documentation"
        :platform="projeto.platform" class="cardProjects">
      </cardProjects>
    </div>
    <div>
    <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>
import cardProjects from '@/components/utilities/cardsProjects.vue'
import pcBuilderLogo from '@/static/pc_builder_logo_cut.png'

export default {
  name: "meus-projetos",
  data() {
    return {
      projetos: [{
        image: pcBuilderLogo,
        link: '',
        path: 'pcBuilderAi',
        name: 'Pc Builder AI',
        description: 'Select your games, FPS  and quality you want to run and the AI will generate the PC for you!',
        status: 'In progress',
        documentation: 'pcBuilderAiDoc',
        platform: 'Web'
      },
      {
        image: '',
        link: '',
        path: '',
        name: '',
        description: '',
        status: 'Soon',
        documentation: '',
        platform: '',
      },
      {
        image: '',
        link: '',
        path: '',
        name: '',
        description: '',
        status: 'Soon',
        documentation: '',
        platform: ''
      },
      {
        image: '',
        link: '',
        path: '',
        name: '',
        description: '',
        status: 'Soon',
        documentation: '',
        platform: ''
      },
      {
        image: '',
        link: '',
        path: '',
        name: '',
        description: '',
        status: 'Soon',
        documentation: '',
        platform: ''
      },
      {
        image: '',
        link: '',
        path: '',
        name: '',
        description: '',
        status: 'Soon',
        documentation: '',
        platform: ''
      },
    ],
    };
  },
  components: {
      cardProjects
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

#projetosRoot {
  display: flex;
  place-items: center;
  justify-content: center;
  min-height: calc(100vh - 56px);
}

#projetosMain {
  display: flex;  
  justify-content: center;
  place-items: center;
  width: fit-content;
  height: 100%;
  border-radius: 15px;
  padding: 1rem;
  gap: 2rem;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-basis: 33%;
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
