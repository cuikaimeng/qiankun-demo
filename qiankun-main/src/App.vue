<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)
const techStack = ref<string>('Vue 3 + TypeScript')
</script>

<template>
  <main class="container">
    <div>主应用</div>
    <div id="subapp"></div>
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
  color: #42b883;
}

button {
  padding: 8px 16px;
  cursor: pointer;
}
</style>
