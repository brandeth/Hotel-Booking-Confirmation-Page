<script setup lang="ts">
import menuIcon from '~/assets/images/hamburger-menu.svg?raw'

const { isOpen, toggle, sidebarId, triggerId } = useSidebar()
</script>

<template>
  <header
    class="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-hb-neutral-400 bg-hb-neutral-100 px-4 py-4 sm:px-6 lg:hidden"
  >
    <img
      src="~/assets/images/logo.svg"
      alt="Maison Soleil"
      width="107"
      height="42"
      class="h-[42px] w-[107px]"
    >

    <IconButton
      :id="triggerId"
      label="Open menu"
      :icon="menuIcon"
      :aria-expanded="isOpen"
      :aria-controls="sidebarId"
      @click="toggle"
    />
  </header>
</template>
