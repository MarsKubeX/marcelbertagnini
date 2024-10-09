<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarMenu from './components/NavbarMenu.vue'
</script>

<template>
  <div class="body-container">
    <NavbarMenu></NavbarMenu>
  </div>
  <RouterView />
</template>

<style scoped>
.body-container {
  max-height: 100vh;
}
</style>
