<template>
  <div class="app">
    <Header :siteName="title" />
    <main>
      <List :recipes="recipes" :subText="subText" />
    </main>
    <Footer text="© 2020 Developed by Nancy Bolstad" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import { API_URL } from "./util/const";
import getTimeOfDay from "./util/getTimeOfDay";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    List
  },
  data() {
    return {
      url: API_URL,
      title: "24h | Recipe Puppy App",
      subText: `Today's ${getTimeOfDay()} Receipes`,
      recipes: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    getTimeOfDay,
    fetchData() {
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
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
body {
  background-color: blanchedalmond;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  text-align: center;
  font-family: "Roboto", sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: blanchedalmond;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  text-align: center;
}
</style>
