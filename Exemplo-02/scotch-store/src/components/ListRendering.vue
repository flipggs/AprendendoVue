<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">{{product.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListRendering",
  data() {
    return {
      products: [{ id: 1, name: "iPhone7" }, { id: 2, name: "iPhone8" }]
    };
  }
};
</script>

