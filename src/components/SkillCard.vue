<template>
  <div class="skill-card-container">
    <img :src="icon" alt="icon" width="75" height="75" />
    <h2>{{ name }}</h2>
    <div class="progress-bar-border">
      <div :class="`progress-bar progress-bar-width-${20 * level}`"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ name: string; icon: string; level: number }>()
</script>

<style scoped>
.skill-card-container {
  width: 15rem;
  display: flex;
  align-items: center;
  background-color: aliceblue;
  color: black;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0px 2px 20px -6px rgba(255, 255, 255, 0.74);
  flex-direction: column;
  transition: all 200ms ease-in-out;
  img {
    margin-bottom: 1.5rem;
  }
}
.skill-card-container:hover {
  transform: scale(1.05);
}

.progress-bar-border {
  width: 100%;
  height: 0.63rem;
  border: 1px solid black;
  border-radius: 1rem;
  margin-top: 1rem;
}

.progress-bar {
  border-radius: 1rem;
  height: 0.5rem;
  background-color: #f05d23;
}

.progress-bar-width-20 {
  width: 20%;
}

.progress-bar-width-40 {
  width: 40%;
}

.progress-bar-width-60 {
  width: 60%;
}

.progress-bar-width-80 {
  width: 80%;
}

.progress-bar-width-100 {
  width: 100%;
}
</style>
