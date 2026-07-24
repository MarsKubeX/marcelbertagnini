<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import { projects } from '@/content/projects'
</script>

<template>
  <section id="projects" class="px-4 py-20 md:px-16">
    <div class="mx-auto max-w-7xl space-y-10">
      <div>
        <h2 class="font-headline text-headline-lg text-on-surface">Selected Projects</h2>
        <p class="font-body text-body-md text-on-surface-variant">
          A showcase of projects I've worked on.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
      </div>
    </div>
  </section>
</template>
