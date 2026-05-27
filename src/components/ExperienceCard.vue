<template>
  <div class="flip-card">
    <div class="flip-card-inner" :class="{ flipped: isFlipped }">
      <!-- Parte Frontal -->
      <div class="flip-card-front">
        <div class="card-image">
          <img alt="Vue logo" :src="titleIcon" width="80" height="80" />
          <h3 class="card-title">{{ title }}</h3>
        </div>
        <button @click="isFlipped = !isFlipped" class="more-info-button">More Info</button>
      </div>
      <!-- Parte Trasera -->
      <div class="flip-card-back">
        <div class="card-back-content">
          <ul>
            <li v-for="bulletPoint in description" v-bind:key="bulletPoint">
              {{ bulletPoint }}
            </li>
          </ul>
        </div>
        <button @click="isFlipped = !isFlipped" class="go-back-button">Go Back</button>
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
  width: 10rem;
  height: 14rem;
  background-color: transparent;
  perspective: 1000px;
  @media (min-width: 640px) {
    width: 20rem;
    height: 20rem;
  }
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

/* Al hacer hover, se voltea la tarjeta (desktop only) */
@media (min-width: 640px) {
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
}

.flip-card-inner.flipped {
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border: 1px solid #ccc;
}

.flip-card-front {
  background-image: linear-gradient(to bottom right, #1a363a, #5f8a77);
}

.flip-card-back {
  background-image: linear-gradient(to bottom right, #5f8a77, #1a363a);
  transform: rotateY(180deg);
  justify-content: flex-start;
  padding: 0.75rem;
}

.card-back-content {
  flex: 1;
  overflow-y: auto;
  width: 100%;
  font-size: 0.8rem;
  @media (min-width: 640px) {
    font-size: 1rem;
  }
}

.card-back-content ul {
  padding-left: 1.2rem;
  margin: 0;
}

.card-back-content li {
  margin-bottom: 0.3rem;
}

.card-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.card-title {
  font-size: 0.9rem;
  text-align: center;
  @media (min-width: 640px) {
    font-size: 1.2rem;
  }
}

.more-info-button,
.go-back-button {
  background-color: transparent;
  margin-top: 0.5rem;
  padding: 0.3rem 0.8rem;
  border: 1px solid var(--color-text);
  color: var(--color-text);
  border-radius: 1rem;
  cursor: pointer;
  font-size: 0.75rem;
  @media (min-width: 640px) {
    display: none;
  }
}
</style>
