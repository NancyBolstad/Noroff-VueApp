<template>
  <div class="app">
    <h1>Hello</h1>
    <HelloWorld :msg="title" />
    <div v-for="(recipe, index) in recipes" v-bind:key="index">
      <div>
        <img :src="recipe.thumbnail" v-bind:alt="thumbnail" />
        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.ingredients }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      recipes: [],
      url: process.env.VUE_APP_URL,
      title: process.env.VUE_APP_TITLE
    };
  },
  created() {
    this.getReceips();
  },
  methods: {
    getReceips() {
      fetch(this.url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data.results);
          this.recipes = data.results;
        });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
