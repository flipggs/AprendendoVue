<template>
  <div>
    <h3>{{title}}</h3>

    <input type="text" placeholder="item da lista" v-model="listIten">
    <button @click="addItem">Add item</button>

    <ul>
      <li v-for="item in data" :key="item.name">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  data() {
    return {
      data: [],
      title: "To do list",
      listIten: ""
    };
  },
  methods: {
    additem() {
      this.data.push({ name: this.listIten });
    }
  }
};
</script>

