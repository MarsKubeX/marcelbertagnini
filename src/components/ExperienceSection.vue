<script setup lang="ts">
import ExperienceTimelineItem from './ExperienceTimelineItem.vue'
import { experienceTimeline } from '@/content/experience'
</script>

<template>
  <section id="experience" class="bg-surface-container-lowest/50 px-4 py-20 md:px-16">
    <div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-12">
      <div class="space-y-6 md:col-span-5">
        <h2 class="font-headline text-headline-lg text-primary">
          A journey of continuous evolution
        </h2>
        <p class="font-body text-body-md text-on-surface-variant">
          Over the past decade I've worked across
          <span class="font-medium text-secondary">Vue</span>,
          <span class="font-medium text-secondary">Angular</span> and
          <span class="font-medium text-secondary">React</span>, from consulting roles to leading
          front-end and design system work at companies like Vodafone, LanguageWire and BASF —
          and I care about building systems that are maintainable and open by default.
        </p>
      </div>

      <div class="md:col-span-7">
        <div class="glass-panel-heavy relative overflow-hidden rounded-xl p-8">
          <div
            class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[100px]"
          ></div>
          <div
            class="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/20 blur-[100px]"
          ></div>
          <div class="relative z-10 ml-4 space-y-10 border-l-2 border-primary/30 pl-8">
            <ExperienceTimelineItem
              v-for="entry in experienceTimeline"
              :key="`${entry.org}-${entry.period}`"
              v-bind="entry"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
