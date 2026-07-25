<script setup lang="ts">
import { scrollToSection } from '@/composables/useScrollTo'

const avatarUrl = `${import.meta.env.BASE_URL}img/profile.jpeg`
</script>

<template>
  <section
    id="hero"
    class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 text-center md:px-16"
  >
    <div class="relative z-10 max-w-4xl space-y-6">
      <div
        class="mx-auto h-28 w-28 rounded-full bg-linear-to-br from-primary to-secondary p-0.75 shadow-[0_0_30px_rgba(76,215,246,0.35)]"
      >
        <img
          :src="avatarUrl"
          alt="Marcel Bertagnini"
          class="h-full w-full rounded-full border-2 border-surface object-cover"
        />
      </div>

      <div
        class="glass-panel inline-flex items-center gap-2 rounded-full border border-secondary/30 px-4 py-1.5 font-label text-label-sm text-secondary"
      >
        <span class="h-2 w-2 rounded-full bg-secondary"></span>
        SOFTWARE ENGINEER @ RED HAT
      </div>

      <h1 class="font-headline text-headline-xl leading-tight text-on-surface">
        Building resilient systems,
        <span class="text-gradient">in the open.</span>
      </h1>

      <p class="mx-auto max-w-2xl font-body text-body-lg text-on-surface-variant">
        I'm a software engineer at Red Hat, working on
        <a
          href="https://podman-desktop.io/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-secondary underline decoration-secondary/40 underline-offset-4 hover:text-primary"
          >Podman Desktop</a
        >
        and the
        <a
          href="https://openkaiden.ai/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-secondary underline decoration-secondary/40 underline-offset-4 hover:text-primary"
          >Kaiden</a
        >
        project.
      </p>

      <div class="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
        <a
          href="#projects"
          class="rounded-xl bg-linear-to-r from-primary to-secondary px-8 py-4 font-label text-label-md text-on-primary shadow-[0_0_30px_rgba(76,215,246,0.3)] transition-all hover:scale-105"
          @click.prevent="scrollToSection('projects')"
        >
          View Projects
        </a>
        <a
          href="mailto:marcel.bertagnini@gmail.com"
          class="glass-panel rounded-xl border border-white/20 px-8 py-4 font-label text-label-md text-on-surface transition-all hover:bg-white/10"
        >
          Let's Talk
        </a>
      </div>
    </div>

    <button
      class="animate-float absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      aria-label="Scroll to experience"
      @click="scrollToSection('experience')"
    >
      <span class="font-label text-label-sm uppercase tracking-widest text-on-surface-variant"
        >Scroll</span
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </button>
  </section>
</template>
