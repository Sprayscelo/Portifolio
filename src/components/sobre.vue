<template>
    <div id="sobreMimRoot">
      <section class="Sobre-mim">
        <h1>
          <span> Olá eu sou o </span> 
          <span><noscript>MARCELO DE OLIVEIRA MARCHIORO.</noscript>MARCELO DE OLIVEIRA MARCHIORO.</span>
          <span class="funcoes">Desenvolvedor front-end </span>
        </h1>
          <div class="redesSociais">
            <div>
              <a href="https://www.linkedin.com/in/marcelooliveiramarchioro/" id="linkedin"> 
                <img src="@/assets/linkedin-logo.svg" alt=""><span> Linkedin </span>  
              </a>
            </div>
            <div>
              <a href="https://github.com/Sprayscelo" id="github"> 
                <img src="@/assets/iconmonstr-github-1.svg" alt=""><span> Github </span>  
              </a>
            </div>
          </div>
        </section>
        <section class="historia">
          <h2>Como comecei?</h2>
          <h3>
            Comecei como analista de suporte em uma empresa de tecnologia/rastreador, Estudei desenvolvimento por aproximadamente 1 ano, 
            depois disso comecei a realizar algumas automações de processos internos da empresa utilizando ferramentas internas e linguagens de programação.
            você pode saber um pouco mais sobre experiencias com linguagens dentro da aba <router-link to="/habilidades">Habilidades</router-link>,
            depois de alguns meses ganhei a oportunidade de focar 100% em realizar ferramentas internas, com 3 meses realizei alguns projetos que consistem em automatizações,
            isso também pode ser encontrado na aba <router-link to="/experiencias">Experiencias</router-link>.
          </h3>
        </section>
    </div>
</template>

<script>
export default {
  name: 'sobre-mim',

}
</script>

<style scoped lang="scss">
    @import '@/static/variables.scss';
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@500&family=Lato:ital,wght@1,300&family=Montserrat:wght@300&family=Quicksand:wght@500&family=Roboto:wght@500;700&display=swap');
    .Sobre-mim {
    text-align: left;
    margin-left: 30px;
    width: 60vw;
    border-radius: 5px;
    padding: 10px 0px 20px 0px;
    h1{
      display: flex;
      margin: 10px;
      flex-direction: column;
      width: fit-content;
      span {
        display: block;
        margin-bottom: 13px;
      }
      span:nth-child(2){
        //text-decoration: underline;
        letter-spacing: 2px;
        border-right: 5px solid;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        animation: 
            escrever 1.5s,
            cursor .4s step-end infinite alternate
      }
      span:nth-child(3) {
        color: $letras2;
      }
        
    }

    @keyframes escrever {
      from {width: 0;}
    }

    @keyframes cursor {
      50% { border-color: transparent;};
    }

  }

  .redesSociais {
    display: flex;
  }

  h2 {
    font-weight: 800;
    letter-spacing: -.01em;
  }
  h3 {
    letter-spacing: normal;
    color: $letras2;
    font-weight: 500;
    font-family: "Helvetica Now Display DW",sans-serif;
    line-height: 2rem;
    a{
      font-weight: bold;
      color: black;
    }
    width: 60vw;
  }

  .historia {
    margin-left: 40px;
  }
</style>