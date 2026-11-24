<template>
  <main class="container">
    <h1>Vue2 子应用</h1>
  </main>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: system-ui, -apple-system, sans-serif;
}

.container {
  padding: 48px;
  text-align: center;
}

h1 {
  color: #41b883;
}

button {
  padding: 8px 16px;
  cursor: pointer;
}
</style>
