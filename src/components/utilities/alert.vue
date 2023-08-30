<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
  <div
    :id="alertStatus ? 'showAnimation' : ''"
    :class="['alertContainerRoot', `${alertType}Container`]"
  >
    <div class="alertContainer">
      <div :class="['material-container', alertType]">
        <span class="material-symbols-outlined">
          {{ alertIcons[alertType] }}
        </span>
      </div>
      <div class="messageContainer">
        <p>
          <strong>{{ alertType.toUpperCase() }}</strong> {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "alert-component",
  data() {
    return {
      alertStatus: false,
      message: "",
      alertType: "",
    };
  },
  methods: {
    async alert(message, alertType) {
      this.message = message;
      this.alertType = alertType;
      this.alertStatus = true;
      await new Promise((resolve) => setTimeout(resolve, 7000));
      this.alertStatus = false;
      this.alertType = "";
      this.alertStatus = "";
    },
  },
  computed: {
    alertIcons() {
      return {
        default: "question_mark",
        error: "error",
        warning: "warning",
        success: "check_circle",
      };
    },
  },
};
</script>

<style name="alertTypesStyle" scoped lang="scss">
@keyframes alert {
  0% {
    opacity: 0;
  }
  30%,
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
}

#showAnimation {
  display: inline-block;
  animation: alert 7s;
}

$color-map: (
  error: (
    #f25c5f,
    #3b1f1c,
    #d80005,
  ),
  warning: (
    #fcb97e,
    #5f2d08,
    #ff6f00,
  ),
  default: (
    #ededed,
    #353535,
    #9d9d9d,
  ),
  success: (
    #81c380,
    #243225,
    #3b903d,
  ),
);

@each $type, $colors in $color-map {
  .#{$type}Container {
    .alertContainer::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 5px;
      top: 0;
      border-radius: 5px 5px 0px 0px;
      background-color: nth($colors, 3);
      z-index: 2;
    }
    .#{$type} {
      color: nth($colors, 1);
      background-color: nth($colors, 2);
    }
    strong {
      color: nth($colors, 3);
      background-color: none;
    }
    p::after {
      background-color: nth($colors, 3);
      background-color: none;
    }
  }
}
</style>

<style lang="scss">
.alertContainerRoot {
  display: none;
  position: fixed;
  width: 50vw;
  background-color: #eeeeee;
  border-radius: 0px 5px;
  box-shadow: 0px 0px 30px -10px;
  opacity: 0;
  .alertContainer {
    display: flex;
    position: relative;
    min-height: 82px;
    .material-container {
      display: flex;
      position: relative;
      justify-content: center;
      border-radius: 5px 0px 0px 0px;
      align-items: center;
      //color: #DF5D5B;
      //background-color: #3D1D1E;
      width: 100px;
      min-height: 82px;
      .material-symbols-outlined {
        text-align: center;
        width: 100%;
        font-size: 40px;
      }
    }
    .messageContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      position: relative;
      min-height: 82px;
      color: black;
      p {
        position: relative;
        margin-left: 2rem;
        width: 100%;
        font-style: italic;
        font-weight: bold;
      }
      p::after {
        content: "";
        width: 90%;
        height: 4px;
        margin-top: 1.4rem;
        border-radius: 0px 5px 0px 5px;
        //background-color: red;
        position: absolute;
        left: 0;
        bottom: -50%;
      }
    }
  }
}
#alertContainerRoot::before {
}
</style>
