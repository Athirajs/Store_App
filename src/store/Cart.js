import axios from "axios";
const state = {
  products: [],
  cartProducts: [],
};
const mutations = {
  LOAD_PRODUCTS: (state, data) => {
    state.products = data;
  },
  ADD_PRODUCT: (state, product) => {
    state.cartProducts.push(product);
  },
  // UPDATE_CART: (state, product) => {
  //   let findIndex = state.cartProducts.findIndex(
  //     (x) => x.productName == product.productName
  //   );
  //   state.cartProducts[findIndex].quantity++;
  // },
  REMOVE_PRODUCT: (state, index) => {
    state.cartProducts.splice(index, 1);
  },
};
const actions = {
  loadProducts: ({ commit }) => {
    axios
      .get("https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6")
      .then((response) => {
        commit("LOAD_PRODUCTS", response.data.products);
      })
      .catch((error) => {
        console.warn(error);
      });
  },

  addProduct: ({ commit, state }, product) => {
    let found = state.cartProducts.some((el) => {
      return el.productName === product.productName;
    });
    if (!found) {
      commit("ADD_PRODUCT", product);
    } else {
      return false;
      // commit("UPDATE_CART", product);
    }
  },
  removeProduct: (context, index) => {
    context.commit("REMOVE_PRODUCT", index);
  },
};
const getters = {
  getAllProducts: (state) => state.products,
  getProductsInCart: (state) => state.cartProducts,
};
export default {
  state,
  mutations,
  actions,
  getters,
};
