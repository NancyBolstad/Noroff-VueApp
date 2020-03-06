<template>
  <div class="app">
    <DumbTitle :msg="title" />
    <List :recipes="recipes" />
  </div>
</template>

<script>
import DumbTitle from "./components/DumbTitle";
import List from "./components/List";
import { API_URL } from "./util/const";

export default {
  name: "App",
  components: {
    DumbTitle,
    List
  },
  data() {
    return {
      url: API_URL,
      title: "Recipe Puppy Vue App v.1.0",
      recipes: []
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
          this.recipes = data.results;
        });
    }
  }
};
</script>

<style>
body {
  background-color: blanchedalmond;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
