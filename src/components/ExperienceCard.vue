<template>
  <!-- <div class="flip-card-container">
    <div class="flip-card-inner">
      <div class="card-front-container">
        <div class="card-front">
          <div class="card-image">
            <img alt="Vue logo" :src="titleIcon" width="125" height="125" />
          </div>
          <h3 class="card-title">{{ title }}</h3>
        </div>
      </div>
      <div class="card-back-container">
        <div class="card-back">
          <ul class="card-description-list">
            <li v-for="bulletPoint in description" v-bind:key="bulletPoint">
              {{ bulletPoint }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div> -->
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
        <div v-for="bulletPoint in description" v-bind:key="bulletPoint">
          {{ bulletPoint }}
        </div>
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
  background-color: transparent;
  width: 25rem; /* Tamaño fijo */
  height: 25rem; /* Tamaño fijo */
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
  background-image: linear-gradient(to bottom right, red, yellow);
  color: #000;
}

.flip-card-back {
  background-color: #2980b9;
  color: #fff;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  div {
    padding: 0 0.5rem;
    margin: 0.5rem;
    border: 1px solid #fff;
    border-radius: 1rem;
  }
  div:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
}
</style>
