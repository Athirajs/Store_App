<template>
  <div class="listOfProducts">
    <div v-for="(product, index) in products" :key="index" class="product">
      <div class="card">
        <div class="card-top">
          <p><span>Gender:</span> {{ product.gender }}</p>
          <p><span>Color:</span> {{ product.primaryColour }}</p>
        </div>
        <img :src="product.searchImage" alt="" class="product-image" />
        <h3 class="product-brand">
          {{ product.brand }}
        </h3>
        <h2 class="product-name">
          {{ product.productName }}
        </h2>
        <div class="product-price">
          <span>Cost: </span>Rs {{ product.price }}
        </div>
        <button class="btn-cart" @click="addProductToCart(product)">
          Add to cart
          <img src="../assets/cart-icon.svg" width="35" />
        </button>
      </div>
    </div>
  </div>
</template>

//
<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["addProduct"]),

    addProductToCart(product) {
      this.addProduct(product);
    },
  },
  computed: {
    products() {
      return this.$store.getters.getAllProducts;
    },
  },
  mounted() {
    this.$store.dispatch("loadProducts");
  },
};
</script>

<style lang="scss" scoped>
.listOfProducts {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}

.product {
  width: 300px;
  background-color: #fff;
  list-style: none;
  box-sizing: border-box;
  padding: 1em;
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
}
.product-image {
  width: 100%;
}
.product-brand {
  font-size: 1em;
  margin: 0.5em 0;
}
.product-name {
  font-size: 0.9em;
  font-weight: normal;
}

.product-price {
  width: 100%;
  align-self: flex-start;
  display: flex;

  margin: 0.5em 0;
  span {
    margin-right: 0.2em;
    font-weight: bold;
  }
}
.card-top {
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  span {
    font-weight: bold;
  }
}
</style>
