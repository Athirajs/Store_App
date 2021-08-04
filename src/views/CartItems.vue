<template>
  <div class="home">
    <Cart>
      <button class="back-btn" @click="goBack">Back</button>
    </Cart>
  </div>
</template>

<script>
// @ is an alias to /src
import Cart from "@/components/CartItem";

export default {
  name: "CartItems",
  components: {
    Cart,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.back-btn {
  width: 10%;
  color: #fff;
  background: rgb(0, 11, 39);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  outline: none;
  border: none;
}
</style>
