<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { BlogPost } from '@/content/blog'

defineProps<{
  post: BlogPost
}>()
</script>

<template>
  <RouterLink
    :to="`/blog/${post.slug}`"
    class="group glass-panel flex flex-col overflow-hidden rounded-xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(76,215,246,0.15)]"
  >
    <div class="mesh-gradient flex h-40 items-center justify-center bg-surface-container">
      <span class="font-headline text-headline-md text-on-surface-variant/30">{{
        post.title.slice(0, 1)
      }}</span>
    </div>
    <div class="flex flex-1 flex-col gap-2 p-6">
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="rounded-full bg-secondary/10 px-3 py-1 font-label text-label-sm text-secondary"
        >
          {{ tag }}
        </span>
      </div>
      <h3
        class="font-headline text-headline-md leading-tight text-on-surface transition-colors group-hover:text-primary"
      >
        {{ post.title }}
      </h3>
      <p class="line-clamp-2 font-body text-body-md text-on-surface-variant">
        {{ post.summary }}
      </p>
      <span v-if="post.date" class="pt-2 font-label text-label-sm text-outline">{{
        post.date
      }}</span>
    </div>
  </RouterLink>
</template>
