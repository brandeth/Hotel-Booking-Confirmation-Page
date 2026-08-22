<script setup lang="ts">
withDefaults(defineProps<{
  guestName?: string
  statusLabel?: string
  greeting?: string
}>(), {
  guestName: 'Lucia.',
  statusLabel: 'Booking · Confirmed',
  greeting: 'Bienvenue,',
})
</script>

<template>
  <header class="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
    <div>
      <p class="text-preset-8 text-hb-neutral-600">{{ statusLabel }}</p>
      <h1 class="text-preset-1 text-hb-neutral-900">
        {{ greeting }}
        <span class="text-preset-1-italic text-hb-terracotta-600">{{ guestName }}</span>
      </h1>
    </div>

    <!-- Below sm the two actions split the row; from sm they size to their
         label and sit at the end of the header. -->
    <div class="flex w-full items-center gap-4 sm:w-auto sm:flex-wrap sm:gap-3">
      <BaseButton variant="secondary" class="flex-1 sm:flex-none">Print receipt</BaseButton>
      <BaseButton class="flex-1 sm:flex-none">Add to calendar</BaseButton>
    </div>
  </header>
</template>
