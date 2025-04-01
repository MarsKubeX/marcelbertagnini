<template>
  <div class="project-card-container">
    <img v-if="image?.url" height="300" :src="image.url" alt="image of project" />
    <h1>{{ title }}</h1>
    <p>
      {{ description }}
      <a v-if="gitUrl" :href="gitUrl" target="_blank">
        <img src="../assets/Github_dark.svg" alt="Github"
      /></a>
      <a v-if="url" :href="url" target="_blank">
        <img src="../assets/browser.svg" alt="Github"
      /></a>
    </p>
  </div>
</template>

<script setup lang="ts">
interface IImage {
  url: string
}
defineProps<{ title: string; description: string; gitUrl?: string; url?: string; image?: IImage }>()
</script>

<style scoped>
.project-card-container {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 1rem auto;
  padding: 1rem;
  > img {
    align-self: center;
    margin-bottom: 1rem;
  }
}
.project-card-container a img {
  width: 25px;
  height: 25px;
  transition: transform 0.2s ease-in-out;
}
.project-card-container a:hover img {
  transform: scale(1.1);
}
</style>
