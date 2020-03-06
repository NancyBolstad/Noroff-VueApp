<template>
  <header>
    <h1>{{ siteName }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    siteName: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  border-bottom: 2px solid black;
  text-align: left;
  padding: 0 5rem;
  margin: 0 auto;
}
h1 {
  color: black;
  font-weight: bold;
  font-size: 1.7rem;
}
</style>
