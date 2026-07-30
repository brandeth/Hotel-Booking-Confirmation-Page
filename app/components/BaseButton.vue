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
    class="inline-flex min-h-12 items-center justify-center rounded-full bg-hb-neutral-900 px-6 py-3 text-sm font-semibold text-hb-neutral-0 shadow-sm transition-colors duration-200 ease-out hover:bg-hb-neutral-800 focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_var(--color-hb-neutral-100),0_0_0_5px_var(--color-hb-terracotta-600)] disabled:cursor-not-allowed disabled:bg-hb-neutral-400 disabled:text-hb-neutral-600"
  >
    <slot />
  </button>
</template>
