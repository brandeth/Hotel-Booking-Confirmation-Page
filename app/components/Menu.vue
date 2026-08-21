<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
}>(), {
  label: 'Stay navigation',
})
</script>

<template>
  <nav :aria-label="label" class="flex flex-col">
    <slot />
  </nav>
</template>
