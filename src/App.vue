<template>
  <div class="recipes">
    <HelloWorld msg="Recipe Puppy App" />
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
import { apiUrl } from "./util/constant";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      recipes: []
    };
  },
  created() {
    this.getReceips();
  },
  methods: {
    getReceips() {
      fetch(apiUrl)
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
