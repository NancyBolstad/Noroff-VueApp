<template>
  <div class="app">
    <header>
      <DumbTitle :msg="title" />
    </header>
    <main>
      <List :recipes="recipes" :subText="subText" />
    </main>
    <footer>
      <h5>© 2020 Developed by Nancy Bolstad</h5>
    </footer>
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
      subText: `Today's ${this.timeOfDay()} Receipes`,
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
    },
    timeOfDay() {
      const hour = new Date().getHours();
      switch (hour) {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
          return "Morning";
        case 11:
        case 12:
          return "Lunch";
        case 13:
        case 14:
        case 15:
        case 16:
          return "Afternoon";
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
          return "Evening";
        default:
          return "Night";
      }
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
header {
  border-bottom: 2px solid black;
  text-align: left;
  padding: 0 5rem;
  margin: 0 auto;
}
footer {
  border-top: 2px solid black;
  opacity: 0.5;
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
