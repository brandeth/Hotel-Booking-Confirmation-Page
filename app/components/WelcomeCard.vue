<script setup lang="ts">
withDefaults(defineProps<{
  hostName: string
  message: string
  roomName: string
  cardLabel?: string
  hostLabel?: string
  roomLabel?: string
}>(), {
  cardLabel: 'Welcome card',
  hostLabel: 'A note from your host,',
  roomLabel: 'Room',
})

const titleId = useId()
</script>

<template>
  <article
    class="flex h-[420px] w-[400px] max-w-full flex-col gap-5 rounded-[20px] bg-welcome-card p-6 shadow-welcome-card"
    :aria-labelledby="titleId"
  >
    <header class="flex items-start justify-between border-t border-dashed border-hb-terracotta-400 pt-4">
      <p class="text-preset-10 uppercase text-hb-sun-50">{{ cardLabel }}</p>
      <img
        src="~/assets/images/sun.svg"
        alt=""
        width="49"
        height="49"
        class="size-[49px]"
        aria-hidden="true"
      >
    </header>

    <div class="flex min-h-0 flex-1 flex-col">
      <p class="text-preset-4-italic text-hb-sun-200">{{ hostLabel }}</p>
      <h2 :id="titleId" class="text-preset-1-italic text-hb-sun-50">{{ hostName }}</h2>
      <p class="mt-5 text-preset-5 text-hb-sun-50">{{ message }}</p>
    </div>

    <footer>
      <p class="text-preset-10 uppercase text-hb-sun-50">{{ roomLabel }}</p>
      <p class="text-preset-4 text-hb-sun-50">{{ roomName }}</p>
    </footer>
  </article>
</template>
