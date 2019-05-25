<template>
  <div>
    <button @click="toggle">Show Lorem</button>

    <p
      id="text"
      v-show="isShown"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore maiores provident, nostrum eius possimus natus libero. Exercitationem corporis, tempora necessitatibus dolorum officia eos voluptatum maxime quam reprehenderit, consequuntur vero!</p>
    
  </div>
</template>

<script>
export default {
  name: "Conditional",
  data() {
    return {
      isShown: false
    };
  },
  methods: {
    toggle() {
        this.isShown = !this.isShown
    }
  }
};
</script>
