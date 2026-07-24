<script setup lang="ts">
import BlogPostCard from './BlogPostCard.vue'
import { blogPosts } from '@/content/blog'
</script>

<template>
  <section id="blog" class="bg-surface-container-high/20 px-4 py-20 md:px-16">
    <div class="mx-auto max-w-7xl space-y-10">
      <div class="text-center">
        <h2 class="font-headline text-headline-lg text-on-surface">Blog</h2>
        <p class="mx-auto max-w-xl font-body text-body-md text-on-surface-variant">
          Notes on open source, work at Red Hat, and other things worth sharing.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <BlogPostCard v-for="post in blogPosts" :key="post.slug" :post="post" />
      </div>
    </div>
  </section>
</template>
