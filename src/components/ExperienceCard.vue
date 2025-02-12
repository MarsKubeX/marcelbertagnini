<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <!-- Parte Frontal -->
      <div class="flip-card-front">
        <div class="card-image">
          <img alt="Vue logo" :src="titleIcon" width="125" height="125" />
        </div>
        <h3 class="card-title">{{ title }}</h3>
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

.flip-card:focus .flip-card-inner {
  @media (max-width: 640px) {
    transform: rotateY(180deg);
  }
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
</style>
