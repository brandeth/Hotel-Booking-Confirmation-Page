<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
}>(), {
  type: 'button',
  variant: 'primary',
})

const variantClasses = computed(() => ({
  primary: 'bg-hb-neutral-900 text-hb-neutral-0 hover:bg-hb-neutral-800 disabled:bg-hb-neutral-400 disabled:text-hb-neutral-600',
  secondary: 'border border-hb-neutral-400 bg-hb-neutral-400 text-hb-neutral-900 hover:border-hb-neutral-600 hover:bg-hb-neutral-200 disabled:border-hb-neutral-400 disabled:bg-hb-neutral-400 disabled:text-hb-neutral-600',
}[props.variant]))
</script>

<template>
  <button
    :type="type"
    class="inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_var(--color-hb-neutral-100),0_0_0_5px_var(--color-hb-terracotta-600)] disabled:cursor-not-allowed"
    :class="variantClasses"
  >
    <slot />
  </button>
</template>
