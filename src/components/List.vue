<template>
  <section>
    <h2>{{ subText }}</h2>
    <div class="list">
      <div class="item" v-for="(recipe, index) in recipes" v-bind:key="index">
        <img :src="recipe.thumbnail" v-bind:alt="`Image of ${recipe.title}`" />
        <h3>{{ recipe.title }}</h3>
        <p>{{ recipe.ingredients }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "List",
  props: {
    recipes: Array,
    subText: String
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Trade+Winds&display=swap");
section {
  max-width: 1440px;
  padding: 0 2rem;
  margin: 2rem auto;
}
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid palevioletred;
  border-radius: 20px;
  background-color: whitesmoke;
  color: black;
  margin-top: 1rem;
  width: 100%;
}
h2 {
  font-family: "Trade Winds", cursive;
  font-size: 2.7rem;
  text-align: center;
}
h3 {
  font-family: "Trade Winds", cursive;
  font-size: 2rem;
  text-align: center;
}
p {
  font-size: 1.25rem;
  text-align: center;
  padding: 0 2rem;
}
img {
  max-width: 12.8125rem;
  width: 100%;
  margin: 1rem auto;
}

@media only screen and (min-width: 768px) {
  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
    margin: 0 auto;
  }

  .item {
    width: 45%;
    padding: 0.2rem;
  }
}

@media only screen and (min-width: 1080px) {
  .item {
    flex-basis: 31.3333%;
  }
}
</style>
