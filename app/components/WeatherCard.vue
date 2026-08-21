<script setup lang="ts">
withDefaults(defineProps<{
  location?: string
  temperature?: number
  condition?: string
}>(), {
  location: 'Cassis',
  temperature: 27,
  condition: 'Sunny · light breeze',
})
</script>

<template>
  <article
    class="relative flex h-[102px] w-[228px] flex-col gap-1.5 overflow-hidden rounded-2xl bg-hb-sun-300 px-4 py-3 shadow-weather-card"
    :aria-label="`Weather in ${location}: ${temperature} degrees, ${condition}`"
  >
    <img
      src="~/assets/images/weather.svg"
      alt=""
      width="80"
      height="80"
      class="pointer-events-none absolute -top-5 -right-4 size-20"
      aria-hidden="true"
    >
    <p class="relative text-preset-10 uppercase text-hb-neutral-600">Today in {{ location }}</p>
    <p class="relative text-preset-2 text-hb-neutral-900">{{ temperature }}°</p>
    <p class="relative text-preset-7 text-hb-neutral-700">{{ condition }}</p>
  </article>
</template>
