<template>
  <div id="cardProjectRoot">
    <div class="image-container">
      <img v-if="this.$props.image" :src="this.$props.image" alt="No image" />
    </div>
    <div class="card-content-container">
      <h3>{{ this.$props.name ? this.$props.name : "Coming soon" }}</h3>
      <div class="card-details">
        <p>
          {{
            this.$props.description
              ? this.$props.description
              : "No description yet."
          }}
        </p>
        <small :style="!this.$props.platform ? `opacity: 0` : ``"
          >Platform: <span>{{ this.$props.platform }}</span></small
        >
        <div class="card-routes">
          <router-link :to="{ name: this.$props.path }"
            >View project</router-link
          >
          <router-link :to="{ name: this.$props.documentation }"
            >Documentation</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/static/variables.scss";

#cardProjectRoot {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  background-color: $background;
  border-radius: 10px;
  width: 25%;
  min-width: min-content;
  height: 300px;
  box-shadow: 0px 0px 20px 0px rgb(159, 159, 159);
  z-index: 2;
  position: relative;
  overflow: hidden;
  transform: scale(100%);
  transition: transform 0.7s ease-in-out;

  .image-container {
    display: flex;
    align-self: flex-start;
    justify-content: center;
    align-items: flex-start;
    width: calc(100% - 1em);
    height: 90%;
    position: absolute;

    img {
      margin-top: 10px;
      width: 200px;
      height: 200px;
      opacity: 35%;
      z-index: 0;
    }
  }
  div.card-content-container,
  #cardProjectRoot:focus-within {
    display: flex;
    flex-direction: column;
    width: calc(100% - 2rem);
    transform: translateY(65%);
    overflow: hidden;
    padding: 1rem;
    position: relative;
    transition: transform 0.7s ease-in-out;
    p {
      position: relative;
      width: 300px;
      min-width: 200px;
      height: 30px;
      min-width: fit-content;
      word-wrap: wrap;
      font-size: 0.8rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    a {
      display: block;
      text-decoration: none;
      color: white;
      font-weight: 500;
      padding: 0.7rem;
      background-color: black;
      border-radius: 10px;
      font-size: small;
      box-shadow: 0px 0px 5px 0px whitesmoke;
      margin-top: 1rem;
    }
    a:hover,
    a:focus {
      color: black;
      background-color: white;
      transition: all 0.3s ease-in-out;
      outline: none;
    }
    h3 {
      margin-bottom: 0.5rem;
      position: relative;
    }
    h3::after {
      content: "";
      background-color: black;
      width: 0%;
      height: 3px;
      position: absolute;
      left: 0;
      bottom: -5px;
      transition: width 0.7s ease-in-out;
    }
    small {
      font-size: 0.7rem;
      font-weight: 600;
    }
    div.card-routes {
      display: flex;
      gap: 1rem;
      justify-content: space-around;
    }
  }
}

#cardProjectRoot:hover,
#cardProjectRoot:focus-within {
  transform: scale(105%);
  div.card-content-container {
    background: linear-gradient(
      hsl(0 0% 0% / 0),
      hsl(20 0% 0% / 0.1) 50%,
      hsl(0 0% 0% / 0.3)
    );
    transform: translateY(0%);
    transition: all 0.5s ease-in-out;
  }
  .card-content-container h3::after {
    content: "";
    width: 100%;
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;
}
</style>

<script>
export default {
  name: "cardProjects",
  data() {
    return {};
  },
  props: [
    "image",
    "link",
    "path",
    "name",
    "description",
    "status",
    "documentation",
    "platform",
  ],
};
</script>
