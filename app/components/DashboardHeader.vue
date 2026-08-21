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
  <header class="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
    <div>
      <p class="text-preset-8 text-hb-neutral-600">{{ statusLabel }}</p>
      <h1 class="text-preset-1 text-hb-neutral-900">
        {{ greeting }}
        <span class="text-preset-1-italic text-hb-terracotta-600">{{ guestName }}</span>
      </h1>
    </div>

    <div class="flex flex-wrap items-center gap-3">
      <BaseButton variant="secondary">Print receipt</BaseButton>
      <BaseButton>Add to calendar</BaseButton>
    </div>
  </header>
</template>
