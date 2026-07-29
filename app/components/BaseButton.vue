<script setup lang="ts">
withDefaults(defineProps<{
  type?: 'button' | 'submit' | 'reset'
}>(), {
  type: 'button',
})
</script>

<template>
  <button
    :type="type"
    class="inline-flex min-h-12 items-center justify-center rounded-full bg-hb-neutral-900 px-6 py-3 text-sm font-semibold text-hb-neutral-0 shadow-sm transition-colors duration-200 ease-out hover:bg-hb-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-hb-blue-500 disabled:cursor-not-allowed disabled:bg-hb-neutral-400 disabled:text-hb-neutral-600"
  >
    <slot />
  </button>
</template>
