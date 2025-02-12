<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { type Ref, ref } from 'vue'
const isMenuOpen: Ref<boolean> = ref(false)
const openCloseMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header>
    <div class="header-button-nav-menu">
      <i @click="openCloseMenu()" class="material-icons" style="font-size: 36px; cursor: pointer">
        <Transition name="fade-icon-menu" mode="out-in">
          <span style="color: #328565" v-if="isMenuOpen">close</span>
          <span style="color: #328565" v-else>menu</span></Transition
        ></i
      >
    </div>
    <nav :class="[isMenuOpen ? 'nav-menu-open' : 'nav-menu-close']">
      <RouterLink @click="openCloseMenu()" to="/">Home</RouterLink>
      <!-- TODO -->
      <!-- <RouterLink @click="openCloseMenu()" to="/projects">Projects</RouterLink> -->
    </nav>
  </header>
</template>
<style scoped>
header {
  margin: 0 1rem;
  @media (min-width: 1024px) {
    padding: 2rem 0;
  }
}

nav {
  width: 90vw;
  font-size: 1rem;
  display: flex;
  @media (max-width: 1024px) {
    background-color: #328565;
    flex-direction: column;
    padding: 2rem 0 2rem 0;
    position: absolute;
  }
}

.nav-menu-open {
  left: 0px;
  transition: 1s;
}
.nav-menu-close {
  left: -100%;
  transition: 1.5s;
}

.fade-icon-menu-enter-active,
.fade-icon-menu-leave-active {
  transition: opacity 0.3s ease;
}

.fade-icon-menu-enter-from,
.fade-icon-menu-leave-to {
  opacity: 0;
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}

nav a {
  color: white;
  display: inline-block;
  @media (min-width: 1024px) {
    padding: 0 1rem;
    border-left: 1px solid white;
  }
  @media (max-width: 1024px) {
    padding: 0.5rem 0 0 2rem;
    font-size: 1.5rem;
  }
}
nav a:first-of-type {
  border: 0;
  padding-left: 2rem;
  @media (min-width: 1024px) {
    padding-left: 1rem;
  }
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.header-button-nav-menu {
  padding: 1rem 0 0 0;
  @media (min-width: 1024px) {
    display: none;
  }
}
</style>
