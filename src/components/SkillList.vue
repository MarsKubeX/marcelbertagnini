<template>
  <div class="skills-list-container">
    <div class="grid-container">
      <SkillCard
        v-for="skill in skillList"
        :key="skill.id"
        :name="skill.name"
        :level="skill.level"
        :icon="skill.icon.url"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'
import SkillCard from './SkillCard.vue'
const SKILL_LIST_QUERY = gql`
  query {
    skills(orderBy: createdAt_ASC) {
      id
      name
      level
      icon {
        url
      }
    }
  }
`
const { result } = useQuery(SKILL_LIST_QUERY)
const skillList = computed(() => result.value?.skills ?? [])
</script>

<style scoped>
.skills-list-container {
  display: flex;
  justify-content: center;
}
/* Estilo base para pantallas pequeñas */
.grid-container {
  max-width: 80rem;
  display: grid;
  grid-template-columns: 1fr; /* Una sola columna */
  gap: 3rem;
}

/* Para pantallas medianas (a partir de 768px) */
@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr); /* Dos columnas */
  }
}

/* Para pantallas grandes (a partir de 1024px) */
@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr); /* Tres columnas */
  }
}
</style>
