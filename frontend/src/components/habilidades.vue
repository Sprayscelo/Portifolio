<template>
  <div id="habilidadesRoot">
    <h1>Habilidades</h1>
    <section>
      <div class="linguagensContainer">
        <div
          v-for="(linguagem, index) in this.linguagens"
          id="linguagens"
          :key="index"
          @click="this.linguagemSelecionada = linguagem"
        >
          <img
            :class="{
              active: linguagem.nome == this.linguagemSelecionada.nome,
            }"
            :src="linguagem.logo"
            alt=""
          />
          <span class="tituloLinguagem">{{ linguagem.nome }}</span>
        </div>
      </div>
      <div id="linguagemSelecionada">
        <p>
          <strong>
            {{
              !linguagemSelecionada.nome
                ? "/* Clique em uma das linguagens para saber mais informações */"
                : linguagemSelecionada.nome
            }}
          </strong>
        </p>
        <span> {{ linguagemSelecionada.info }} </span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "minhas-habilidades",
  data() {
    return {
      ativo: false,
      linguagens: [
        {
          logo: require("@/assets/icons8-javascript-logo-50.png"),
          nome: "Javascript",
          info: "Utilizo Javascript no dia a dia na empresa que trabalho atualmente, estou a aproximadamente 1 ano estudando e trabalhando com esta linguagem.",
        },
        {
          logo: require("@/assets/icons8-css3-50.png"),
          nome: `CSS`,
          info: `Utilizo para projetos pessoais e já possuo aproximadamente 1 ano de experiencia com esta linguagem.`,
        },
        {
          logo: require("@/assets/icons8-html-96.png"),
          nome: "HTML",
          info: "Aprendi a linguagem juntamente com CSS, portanto também possue 1 ano de experiencia com essa linguagem.",
        },
        {
          logo: require("@/assets/icons8-django-50.png"),
          nome: "Django",
          info: 'Aprendi muito deste framework durante o curso online realizado na "EDX" fornecido pela universidade de Harvard, alguns de meus projetos feito em Django podem ser visto no meu github, possuo aproximadamente 1 ano de experiencia com esta linguagem.',
        },
        {
          logo: require("@/assets/icons8-python-50.png"),
          nome: "Python",
          info: "Aprendi esta linguagem durante o curso de Harvard utilizando Django, realizei algumas tarefas de automatização na empresa que trabalho também, tenho aproximamente 1 ano de experiencia com esta linguagem.",
        },
        {
          logo: require("@/assets/icons8-vuejs-64.png"),
          nome: "VueJS",
          info: "Utilizei Vue para realizar o projeto de teste para subir ao cargo de desenvolvedor na empresa que trabalho, possuo aproxidamente 5 meses de experiencia com esta linguagem.",
        },
        {
          logo: require("@/assets/icons8-sass-96.png"),
          nome: "Sass",
          info: "Comecei a utilizar Sass para realizar este portifólio, portanto possuo apenas 2 semanas de experiencia com a linguagem.",
        },
        {
          logo: require("@/assets/icons8-github-50.png"),
          nome: "Github",
          info: "Utilizo Github a aproximadamente 2 anos para fazer alguns projetos pessoais que podem ser visto no portifolio ou em meu github.",
        },
        {
          logo: require("@/assets/flutter.png"),
          nome: "Flutter",
          info: "Utilizei para realizar uma nova feature dentro da empresa no qual eu trabalhava, utilizei por aproximadamente 6 meses",
        },
      ],
      linguagemSelecionada: "",
      linguagemAtiva: ``,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
@import "@/static/variables.scss";
section {
  display: grid;
  // grid-template-columns: minmax(min-content, 40%) minmax(60%,70%);
  grid-template-columns: minmax(min-content, 35%) 60%;
  height: 100%;
  width: 100vw;
  padding-bottom: 50px;
  .linguagensContainer {
    display: flex;
    flex-wrap: wrap;
    font-weight: 800;
    justify-content: center;
    gap: 15px;
    background-color: $headerColor;
    margin-left: 15px;
    padding: 15px;
    border-radius: 10px;
  }
  #linguagemSelecionada {
    display: inline-block;
    margin-left: 15px;
    p {
      margin-top: 10px;
      font-size: 1.5em;
      font-weight: bolder;
      text-decoration: underline;
      text-underline-offset: 0.3em;
    }
    span {
      font-size: 1.1em;
      color: $letras2;
      font-weight: 800;
    }
  }
}

.tituloLinguagem {
  color: white;
  display: block;
  text-align: center;
}

path {
  pointer-events: none;
}
svg,
img {
  border: $letras double 5px;
  background-color: white;
  border-radius: 100%;
  padding: 10px;
  width: 50px;
  height: 50px;
}

svg:hover,
img:hover,
.active {
  box-shadow: 0px 0px 10px white;
  transform: scale(105%);
  transition: all 0.2s ease-in-out;
}

h1 {
  display: block;
  text-align: center;
  margin-top: 0;
  font-size: 2rem;
  margin-bottom: 0px;
  margin-top: 1rem;
  padding-bottom: 10px;
}
</style>
