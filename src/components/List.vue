<template>
  <div class="list">
    <div class="item" v-for="(recipe, index) in recipes" v-bind:key="index">
      <img :src="recipe.thumbnail" v-bind:alt="`Image of ${recipe.title}`" />
      <h2>{{ recipe.title }}</h2>
      <p>{{ recipe.ingredients }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    recipes: Array
  }
};
</script>

<style scoped>
.list {
  display: flex;
  max-width: 1440px;
  padding: 2rem;
  margin: 2rem auto;
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
