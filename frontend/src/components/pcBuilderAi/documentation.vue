<template>
  <div id="pcBuilderAiDocumentation">
    <h1>PC Builder AI - Documentation</h1>
    <div class="section">
      <h2>About the Project</h2>
      <p>
        This project is designed to assist individuals who are unsure about
        which PC to purchase.
      </p>
    </div>
    <div class="section">
      <h2>How to Use</h2>
      <p>
        Using the project is simple! Just input the game title, desired average
        FPS, and preferred graphics quality. The configuration is then sent to
        the ChatGPT API, which generates the ideal PC specifications for you.
      </p>
      <p>
        There's no limit to the number of games you can add. Simply fill out the
        cards and generate your PC.
      </p>
      <p>
        <strong
          >Remember: The more games you add to the list, the longer it might
          take for your computer's configuration to be generated!</strong
        >
      </p>
    </div>
    <hr />
    <div class="section">
      <h2>Libraries/Frameworks Used</h2>
      <h3>Front-end</h3>
      <ul>
        <li><a href="https://vuejs.org/guide/quick-start.html">Vue 3</a></li>
        <li><a href="https://www.npmjs.com/package/axios">Axios</a></li>
        <li>
          <a href="https://router.vuejs.org/installation.html">Vue Router</a>
        </li>
      </ul>
      <h3>Backend</h3>
      <ul>
        <li><a href="https://nodejs.org/en">Node.js</a></li>
        <li><a href="https://www.npmjs.com/package/axios">Axios</a></li>
        <li><a href="https://www.npmjs.com/package/nodemon">Nodemon</a></li>
        <li>
          <a href="https://www.npmjs.com/package/body-parser">Body-parser</a>
        </li>
        <li><a href="https://www.npmjs.com/package/express">Express</a></li>
      </ul>
    </div>
    <hr />
    <div class="section">
      <h2>Used APIs</h2>
      <ul>
        <li>
          <a href="https://api-docs.igdb.com/?javascript#getting-started"
            >IGDB - for listing games</a
          >
        </li>
        <li>
          <a href="https://platform.openai.com/docs/introduction"
            >ChatGPT - for generating PC configurations</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "documentation-pcBuilderAi",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "@/static/variables.scss";

#pcBuilderAiDocumentation {
  h1 {
    text-align: center;
  }
  h3 {
    margin-bottom: 0px;
  }
  padding: 2rem;
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    pre {
      padding: 2rem;
      background-color: $background;
      border-radius: 20px;
    }
    a {
      width: fit-content;
    }
    li {
      line-height: 2rem;
    }
  }
  .runProcess p:first-child {
    margin-bottom: 3rem;
  }
}

hr {
  height: 2px;
  background-color: black;
  margin-top: 2rem;
}
</style>
