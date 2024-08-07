<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ProfileIntroduction from './components/ProfileIntroduction.vue'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Projects</RouterLink>
    </nav>
  </header>
  <div class="body">
    <ProfileIntroduction></ProfileIntroduction>
    <RouterView />
  </div>
</template>

<style scoped>
.logo {
  width: 20rem;
  height: auto;
  border-radius: 50%;
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  text-decoration-line: underline;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding-bottom: 2rem;
  }
}
</style>
