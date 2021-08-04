<template>
  <div id="app">
    <Navbar>
      <button class="btn-cart" @click="goToCart">
        Cart
        <img src="./assets/cart-icon.svg" width="35" />
        <span class="btn-circle" v-if="hasProduct()">
          {{ getProductsInCart.length }}
        </span>
      </button>
    </Navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Navbar from "@/views/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters(["getProductsInCart"]),
  },
  methods: {
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    goToCart() {
      this.$router.push("/Cart");
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto");
* {
  padding: 0;
  margin: 0;
  position: relative;
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
  background-color: #fafafa;
}

a {
  color: #000;
  text-decoration: none;
}

.container {
  width: 100%;
}

.cart {
  position: absolute;
  top: 75px;
  right: 300px;
}
.btn-cart {
  color: #fff;
  background: rgb(50, 102, 245);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  outline: none;
  border: none;
}
.btn-circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.leave-enter-active,
.leave-leave-active {
  transition: all 1.2s;
}
.leave-enter,
.leave-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}

.appear-enter-active {
  animation: appear-animation 0.5s;
}

.appear-leave-active {
  animation: appear-animation 0.5s reverse;
}

@keyframes appear-animation {
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>
