<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarMenu from './components/NavbarMenu.vue'
import { socialLinks } from '@/content/social'
</script>

<template>
  <NavbarMenu />
  <main class="flex-1">
    <RouterView />
  </main>
  <footer class="border-t border-white/5 bg-surface-container-lowest px-4 py-12 md:px-16">
    <div
      class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row"
    >
      <div class="text-center md:text-left">
        <div class="font-headline text-headline-md text-on-surface">Marcel Bertagnini</div>
        <p class="font-body text-body-md text-on-surface-variant">
          &copy; {{ new Date().getFullYear() }} All rights reserved.
        </p>
      </div>
      <div class="flex gap-6">
        <a
          v-for="social in socialLinks"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="font-body text-body-md text-on-surface-variant transition-colors hover:text-secondary"
        >
          {{ social.label }}
        </a>
      </div>
    </div>
  </footer>
</template>
