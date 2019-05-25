<template>
  <div>
    <p>{{counter}}</p>
    <button @click="incrementCounter">++</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
      return {counter: 0}
  },
  methods: {
      incrementCounter(){
          this.counter++
      }
  }
};
</script>

