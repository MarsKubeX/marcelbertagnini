<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { goToSection } from '@/composables/useScrollTo'
import { socialLinks } from '@/content/social'
import githubIcon from '@/assets/Github_dark.svg'
import linkedinIcon from '@/assets/linkedin.svg'

const router = useRouter()
const route = useRoute()
const isMenuOpen = ref(false)

const navLinks = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' }
]

const socialIcons: Record<string, string> = {
  github: githubIcon,
  linkedin: linkedinIcon
}

function handleNav(id: string) {
  isMenuOpen.value = false
  goToSection(router, route, id)
}
</script>

<template>
  <header
    class="fixed top-0 z-50 w-full border-b border-white/10 bg-surface/70 backdrop-blur-md"
  >
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-16">
      <button
        class="font-headline text-headline-md tracking-tight text-primary"
        @click="handleNav('hero')"
      >
        Marcel Bertagnini
      </button>

      <nav class="hidden items-center gap-8 md:flex">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="font-label text-label-md text-on-surface-variant transition-colors hover:text-primary"
          @click.prevent="handleNav(link.id)"
        >
          {{ link.label }}
        </a>
        <div class="flex items-center gap-4 border-l border-white/10 pl-6">
          <a
            v-for="social in socialLinks.filter((s) => s.icon !== 'mail')"
            :key="social.label"
            :href="social.href"
            :aria-label="social.label"
            target="_blank"
            rel="noopener noreferrer"
            class="opacity-80 transition-opacity hover:opacity-100"
          >
            <img :src="socialIcons[social.icon]" :alt="social.label" class="h-5 w-5" />
          </a>
        </div>
      </nav>

      <button
        class="text-primary md:hidden"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <Transition name="drawer">
      <div
        v-if="isMenuOpen"
        class="flex flex-col gap-6 border-t border-white/10 bg-surface/95 px-6 py-8 backdrop-blur-md md:hidden"
      >
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="font-headline text-headline-md text-on-surface-variant"
          @click.prevent="handleNav(link.id)"
        >
          {{ link.label }}
        </a>
        <div class="flex items-center gap-6 pt-2">
          <a
            v-for="social in socialLinks.filter((s) => s.icon !== 'mail')"
            :key="social.label"
            :href="social.href"
            :aria-label="social.label"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="socialIcons[social.icon]" :alt="social.label" class="h-6 w-6" />
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
