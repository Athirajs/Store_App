<template>
  <div class="home">
    <Product />
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/Product";

export default {
  name: "Products",
  components: {
    Product,
  },
};
</script>
