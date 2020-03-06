<template>
  <footer>
    <span>{{ text }}</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    text: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  border-top: 2px solid black;
  opacity: 0.5;
  font-size: 1rem;
  padding: 3rem 0;
}
</style>
