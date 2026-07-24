<script setup lang="ts">
withDefaults(
  defineProps<{
    period: string
    role: string
    org: string
    location: string
    description: string
    current?: boolean
  }>(),
  { current: false }
)
</script>

<template>
  <div class="relative">
    <div
      class="absolute -left-[29px] top-1 h-3 w-3 rounded-full"
      :class="current ? 'bg-primary shadow-[0_0_10px_#d0bcff]' : 'bg-outline'"
    ></div>
    <span
      class="mb-1 block font-label text-label-sm"
      :class="current ? 'text-primary' : 'text-on-surface-variant'"
      >{{ period }}</span
    >
    <h3 class="font-headline text-headline-md text-on-surface">{{ role }} @ {{ org }}</h3>
    <span class="mt-1 block font-label text-label-sm text-outline">{{ location }}</span>
    <p class="mt-2 font-body text-body-md text-on-surface-variant">{{ description }}</p>
  </div>
</template>
