<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarMenu from './components/NavbarMenu.vue'
</script>

<template>
  <header>
    <div class="body-container">
      <NavbarMenu></NavbarMenu>
    </div>
  </header>
  <body>
    <RouterView />
  </body>
  <footer>This is a footer</footer>
</template>

<style scoped>
.body-container {
  max-height: 100vh;
}
</style>
