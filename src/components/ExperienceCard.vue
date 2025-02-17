<template>
  <div class="flip-card">
    <div class="flip-card-inner" :class="{ flipped: isFlipped }">
      <!-- Parte Frontal -->
      <div class="flip-card-front">
        <div class="card-image">
          <img alt="Vue logo" :src="titleIcon" width="125" height="125" />
          <h3 class="card-title">{{ title }}</h3>
        </div>
        <button @click="isFlipped = !isFlipped" class="more-info-button">More Info</button>
      </div>
      <!-- Parte Trasera -->
      <div class="flip-card-back">
        <ul>
          <li v-for="bulletPoint in description" v-bind:key="bulletPoint">
            {{ bulletPoint }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isFlipped = ref(false)
defineProps<{
  title: string
  description: string[]
  titleIcon: string
}>()
</script>

<style scoped>
.flip-card {
  width: 20rem; /* Tamaño fijo */
  height: 45rem; /* Tamaño fijo */
  background-color: transparent;
  @media (min-width: 640px) {
    width: 30rem; /* Tamaño fijo */
    height: 30rem; /* Tamaño fijo */
  }
  perspective: 1000px; /* Para el efecto 3D */
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
/* Al hacer hover, se voltea la tarjeta */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}
/* Caras de la tarjeta */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid #ccc;
  @media (max-width: 640px) {
    flex-direction: column;
  }
}

.flip-card-front {
  background-image: linear-gradient(to bottom right, #1a363a, #5f8a77);
}

.flip-card-back {
  background-image: linear-gradient(to bottom right, #5f8a77, #1a363a);
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
}

.card-image {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.more-info-button {
  @media (min-width: 640px) {
    display: none;
  }
  background-color: transparent;
  margin-top: 2rem;
  padding: 0.5rem;
  border: 1px solid var(--color-text);
  color: var(--color-text);
  border-radius: 1rem;
}
</style>
