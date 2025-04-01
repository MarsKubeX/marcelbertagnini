<template>
  <div v-for="project in projects" v-bind:key="project.id">
    <project-card
      :title="project.title"
      :description="project.description"
      :gitUrl="project.gitUrl"
      :url="project.url"
      :image="project.image"
    />
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'
const PROJECTS_LIST_QUERY = gql`
  query {
    projects(orderBy: createdAt_ASC) {
      id
      title
      description
      url
      gitUrl
      image {
        url
      }
    }
  }
`
const { result } = useQuery(PROJECTS_LIST_QUERY)
const projects = computed(() => result.value?.projects ?? [])
</script>

<style scoped></style>
