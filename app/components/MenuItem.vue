<script setup lang="ts">
withDefaults(defineProps<{
  count?: number | string
  type?: 'button' | 'submit' | 'reset'
}>(), {
  count: undefined,
  type: 'button',
})
</script>

<template>
  <button
    :type="type"
    class="flex h-10 w-full items-center gap-2 rounded-lg border-0 bg-transparent px-3 py-2.5 text-sm font-medium leading-5 text-hb-neutral-700 transition-colors duration-200 ease-out hover:bg-hb-neutral-0 active:bg-hb-neutral-200 active:text-hb-neutral-900 focus-visible:bg-hb-neutral-0 focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-hb-neutral-100),0_0_0_4px_var(--color-hb-terracotta-600)] disabled:cursor-not-allowed disabled:opacity-50"
  >
    <span class="grid size-5 shrink-0 place-items-center" aria-hidden="true">
      <slot name="icon">
        <svg class="size-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.6559 10.0992V5.98738C15.6559 5.44113 15.6559 5.16801 15.5771 4.94907C15.4425 4.57517 15.1482 4.28082 14.7743 4.14621C14.5553 4.06738 14.2822 4.06738 13.7359 4.06738H6.2657C5.71946 4.06738 5.44634 4.06738 5.22739 4.14621C4.8535 4.28082 4.55914 4.57517 4.42453 4.94907C4.3457 5.16801 4.3457 5.44113 4.3457 5.98738V10.0992" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9.16667 10.0992V9.60092C9.16667 9.2595 9.16667 9.08875 9.11742 8.95192C9.03325 8.71825 8.84933 8.53425 8.61558 8.45017C8.47875 8.40092 8.30808 8.40092 7.96667 8.40092H7.45C7.10859 8.40092 6.93789 8.40092 6.80105 8.45017C6.56737 8.53425 6.3834 8.71825 6.29927 8.95192C6.25 9.08875 6.25 9.2595 6.25 9.60092V10.0992" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M13.75 10.0992V9.60092C13.75 9.2595 13.75 9.08875 13.7007 8.95192C13.6166 8.71825 13.4326 8.53425 13.1989 8.45017C13.0621 8.40092 12.8914 8.40092 12.55 8.40092H12.0333C11.6919 8.40092 11.5212 8.40092 11.3844 8.45017C11.1506 8.53425 10.9667 8.71825 10.8826 8.95192C10.8333 9.08875 10.8333 9.2595 10.8333 9.60092V10.0992" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17.5 15.9326V12.0192C17.5 11.473 17.5 11.1999 17.4212 10.981C17.2866 10.6071 16.9922 10.3127 16.6183 10.1781C16.3993 10.0992 16.1262 10.0992 15.58 10.0992H4.42C3.87375 10.0992 3.60063 10.0992 3.38168 10.1781C3.00779 10.3127 2.71343 10.6071 2.57882 10.981C2.5 11.1999 2.5 11.473 2.5 12.0192V15.9326" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2.5 14.9008H17.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </slot>
    </span>

    <span class="min-w-0 flex-1 truncate text-left">
      <slot />
    </span>

    <span
      v-if="count !== undefined"
      class="grid size-4 shrink-0 place-items-center rounded-full bg-hb-terracotta-600 text-[10px] font-medium leading-none text-hb-neutral-100"
      :aria-label="`${count} item${String(count) === '1' ? '' : 's'}`"
    >
      {{ count }}
    </span>
  </button>
</template>
