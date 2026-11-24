<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <main class="container">
    <h1>Vue3 子应用</h1>
  </main>
</template>

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
  color: #35495e;
}

button {
  padding: 8px 16px;
  cursor: pointer;
}
</style>
