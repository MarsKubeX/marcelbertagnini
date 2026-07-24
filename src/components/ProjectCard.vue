<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    description: string
    tags: string[]
    githubUrl: string
    large?: boolean
  }>(),
  { large: false }
)
</script>

<template>
  <a
    :href="githubUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="group glass-panel relative flex flex-col justify-between overflow-hidden rounded-xl p-6 transition-all duration-500 hover:shadow-[0_0_40px_rgba(208,188,255,0.15)]"
    :class="large ? 'md:col-span-2 md:p-8' : ''"
  >
    <div>
      <div class="mb-4 flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="rounded-full bg-primary/10 px-3 py-1 font-label text-label-sm text-primary"
        >
          {{ tag }}
        </span>
      </div>
      <h3 class="font-headline text-headline-md text-on-surface">{{ title }}</h3>
      <p class="mt-2 font-body text-body-md text-on-surface-variant">{{ description }}</p>
    </div>

    <span
      class="mt-6 inline-flex items-center font-label text-label-md text-primary"
    >
      View on GitHub
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </span>

    <div
      class="pointer-events-none absolute inset-0 rounded-xl border border-white/0 transition-all group-hover:border-primary/30"
    ></div>
  </a>
</template>
