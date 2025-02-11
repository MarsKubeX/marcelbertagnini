<script setup lang="ts">
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'
import ExperienceCard from './ExperienceCard.vue'

const EXPERIENCES_LIST_QUERY = gql`
  query {
    experienceTechnologies(orderBy: createdAt_ASC) {
      id
      title
      description
      titleIcon {
        url
      }
    }
  }
`
const { result } = useQuery(EXPERIENCES_LIST_QUERY)

const experiencesList = computed(() => result.value?.experienceTechnologies ?? [])
</script>

<template>
  <div class="experience-list">
    <div v-for="experience in experiencesList" v-bind:key="experience.id">
      <experience-card
        :title="experience.title"
        :description="experience.description"
        :titleIcon="experience.titleIcon.url"
      />
    </div>
  </div>
</template>

<style>
.experience-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
