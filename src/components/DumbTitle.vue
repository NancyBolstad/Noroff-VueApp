<template>
  <div class="dumbTitle">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "DumbTitle",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: black;
  font-weight: bold;
  text-align: center;
  font-size: 3.5rem;
}
</style>
