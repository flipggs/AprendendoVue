<template>
  <div>
      <h2>Example 01</h2>
    <input type="text" v-model="value">
    <p>You typed {{value}}</p>

    <h2>Example 02</h2>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{checked}}</label>

  </div>
</template>

<script>
export default {
    name: "TowWayBinding",
    data(){
        return {
            value: "",
            checked: false,
        }
    }
};
</script>

<style>
</style>
