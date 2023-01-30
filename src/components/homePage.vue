<template>
  <div id="homePageRoot">
    <div class="homePageContainer">
      <header>{{meuNome}} </header>
      <div>
        <ul>
          <li> <router-link to="/"> Sobre mim </router-link> </li>
          <li> <router-link to="/habilidadesMe"> Habilidades </router-link>  </li>
          <li> <router-link to="#"> Experiencias </router-link> </li>
          <li> <router-link to="#"> Projetos </router-link> </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      meuNome: '<Marcelo de Oliveira Marchioro/>'
    }
  }, 
  props: {
    msg: String
  },
  
  methods: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
   @import url('https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@500&family=Montserrat:wght@300&family=Quicksand:wght@500&family=Roboto:wght@500;700&display=swap');
   @import '@/static/variables.scss';

  #homePageRoot {
    display: inline-block;
    width: 100%;
    height: max-content;
  }

  .homePageContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    background-color: $headerColor;
    color: $headerLetterColor;
    height: 100%;
    border-bottom: 3px $outlineHeader solid;
      ul {
      display: flex;
      gap: 15px;
      list-style: none;
      position: relative;
      li {
        cursor: pointer;
        margin-right: 15px;
        position: relative;
        padding-bottom: 2px;
        }
        li::before {
          content: "";
          background-color: white;
          width: 0%;
          height: 1.2px;
          bottom: 0;
          right: 50%;
          position: absolute;
          transform: translate(50%);
        }
        li:hover::before
        {
          text-align: center;
          width: 100%;
          transition: width .2s linear
        }
        a {
          text-decoration: none;
          color: $headerLetterColor;
        }
    }

    

  }

  .redesSociais {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    div{
      margin-left: 10px;
      width: 90%;
      box-shadow: 0px 0px 5px;
      border: 2px solid;
      border-radius: 5px;
      border-color: black;
      background-color: rgb(220, 220, 220);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      a {
        width: 60%;
        text-decoration: none;
        color:black;
      }
      padding: 5px 5px;
      text-align: center;
      img {
        margin-right: 10px;
        vertical-align: middle;
        width: 30px;
        height: 30px;
      }
    }
  }

  .funcoes {
    color: $letras;
    font-size: 20px;
    text-decoration: underline;
    text-decoration-skip: 5px;
  }
</style>
