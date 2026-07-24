<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { goToSection } from '@/composables/useScrollTo'
import { getPostBySlug } from '@/content/blog'

const route = useRoute()
const router = useRouter()
const post = computed(() => getPostBySlug(route.params.slug as string))
</script>

<template>
  <article v-if="post" class="mx-auto max-w-3xl px-4 py-20 md:px-16">
    <a
      href="/#blog"
      class="mb-8 inline-flex items-center gap-1 font-label text-label-md text-on-surface-variant transition-colors hover:text-primary"
      @click.prevent="goToSection(router, route, 'blog')"
    >
      &larr; Back to blog
    </a>

    <div class="mb-6 flex flex-wrap gap-2">
      <span
        v-for="tag in post.tags"
        :key="tag"
        class="rounded-full bg-secondary/10 px-3 py-1 font-label text-label-sm text-secondary"
      >
        {{ tag }}
      </span>
    </div>

    <h1 class="font-headline text-headline-xl leading-tight text-on-surface">
      {{ post.title }}
    </h1>
    <span v-if="post.date" class="mt-4 block font-label text-label-sm text-outline">{{
      post.date
    }}</span>

    <div class="prose-post mt-10" v-html="post.html"></div>
  </article>

  <div v-else class="mx-auto max-w-3xl px-4 py-20 text-center md:px-16">
    <h1 class="font-headline text-headline-lg text-on-surface">Post not found</h1>
    <a href="/#blog" class="mt-4 inline-block text-primary" @click.prevent="goToSection(router, route, 'blog')"
      >&larr; Back to blog</a
    >
  </div>
</template>
