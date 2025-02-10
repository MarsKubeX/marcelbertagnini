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
  <footer>
    <div>
      <span>Marcel Bertagnini</span>
      <span>© 2025 All Rights Reserved</span>
    </div>
  </footer>
</template>

<style scoped>
.body-container {
  max-height: 100vh;
}
footer {
  background-color: var(--color-footer);
  text-align: center;
  padding: 2rem 1rem 2rem 1rem;
  bottom: 0;
  width: 100%;
  div {
    display: flex;
    justify-content: space-around;
  }
}
</style>
