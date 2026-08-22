<script setup lang="ts">
withDefaults(defineProps<{
  /** Accessible name — these buttons have no visible text. */
  label: string
  /** Raw SVG markup, imported with `?raw`. */
  icon: string
  type?: 'button' | 'submit' | 'reset'
}>(), {
  type: 'button',
})

const el = ref<HTMLButtonElement | null>(null)

// Lets a parent call `theRef.focus()` without reaching through `$el`.
defineExpose({ focus: () => el.value?.focus() })
</script>

<template>
  <button
    ref="el"
    :type="type"
    :aria-label="label"
    class="grid size-8 shrink-0 cursor-pointer place-items-center rounded-sm border border-hb-neutral-400 bg-transparent text-hb-neutral-900 transition-colors duration-200 ease-out hover:bg-hb-neutral-200 focus-visible:shadow-[0_0_0_2px_var(--color-hb-neutral-100),0_0_0_4px_var(--color-hb-terracotta-600)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
  >
    <!-- The source SVGs hard-code stroke="black"; stroke-current re-points them
         at the button's own colour so hover and disabled states carry through. -->
    <span
      class="grid size-5 place-items-center [&_path]:stroke-current [&_svg]:size-5"
      aria-hidden="true"
      v-html="icon"
    />
  </button>
</template>
