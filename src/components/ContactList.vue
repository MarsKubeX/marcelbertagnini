<template>
  <div class="contact-list-container">
    <a class="text-url" href="https://www.linkedin.com/in/marcel-bertagnini-pardo-3b2865110/">
      <img src="../assets/linkedin.svg" alt="Github" width="25" height="25" />
      Linkedin</a
    >
    <a class="text-url" href="mailto: marcel.bertagnini@gmail.com">
      <img src="../assets/gmail.svg" alt="Github" width="25" height="25" />
      Mail</a
    >
    <a class="text-url" href="https://github.com/MarsKubeX">
      <img src="../assets/Github_dark.svg" alt="Github" width="25" height="25" />
      Github</a
    >
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.contact-list-container {
  display: flex;
  justify-content: space-around;
  a {
    padding: 1rem;
  }
}
</style>
