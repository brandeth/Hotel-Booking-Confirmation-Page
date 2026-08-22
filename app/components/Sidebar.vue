<script setup lang="ts">
import doubleBedIcon from '~/assets/images/double-bed.svg?raw'
import homeIcon from '~/assets/images/home.svg?raw'
import pinIcon from '~/assets/images/pin.svg?raw'
import foodIcon from '~/assets/images/food.svg?raw'
import emailIcon from '~/assets/images/email.svg?raw'
import closeIcon from '~/assets/images/close-remove.svg?raw'

const { isOpen, close, sidebarId, triggerId } = useSidebar()

// Whether the panel is currently a modal drawer rather than a static column.
// Only behaviour keys off this — the visual switch is pure CSS (`lg:` classes),
// so the desktop layout is correct on first paint, before hydration.
const isDesktop = useMediaQuery(SIDEBAR_BREAKPOINT)
const isDrawer = computed(() => !isDesktop.value)
const isDrawerOpen = computed(() => isDrawer.value && isOpen.value)

const panel = ref<HTMLElement | null>(null)
const closeButton = ref<{ focus: () => void } | null>(null)

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

function focusableItems() {
  return panel.value ? [...panel.value.querySelectorAll<HTMLElement>(FOCUSABLE)] : []
}

function onKeydown(event: KeyboardEvent) {
  if (!isDrawerOpen.value) {
    return
  }

  if (event.key === 'Escape') {
    event.preventDefault()
    close()
    return
  }

  if (event.key !== 'Tab') {
    return
  }

  const items = focusableItems()
  const first = items[0]
  const last = items[items.length - 1]

  if (!first || !last) {
    return
  }

  const active = document.activeElement
  const inside = active instanceof Node && panel.value?.contains(active)

  if (event.shiftKey && (active === first || !inside)) {
    event.preventDefault()
    last.focus()
  }
  else if (!event.shiftKey && active === last) {
    event.preventDefault()
    first.focus()
  }
}

function restoreFocusToTrigger() {
  const trigger = document.getElementById(triggerId)

  // Skip when the trigger is hidden — e.g. the viewport just grew past lg.
  if (trigger?.offsetParent) {
    trigger.focus()
  }
}

watch(isDrawerOpen, (open, wasOpen) => {
  if (open === wasOpen) {
    return
  }

  document.body.style.overflow = open ? 'hidden' : ''

  if (open) {
    nextTick(() => closeButton.value?.focus())
    return
  }

  const active = document.activeElement
  const leavingFocusBehind = !active || active === document.body
    || (active instanceof Node && panel.value?.contains(active))

  if (leavingFocusBehind) {
    restoreFocusToTrigger()
  }
})

onMounted(() => window.addEventListener('keydown', onKeydown))

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Transition name="scrim">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-40 bg-hb-neutral-900/40 lg:hidden"
      aria-hidden="true"
      @click="close"
    />
  </Transition>

  <aside
    :id="sidebarId"
    ref="panel"
    :role="isDrawer ? 'dialog' : undefined"
    :aria-modal="isDrawer ? 'true' : undefined"
    :aria-label="isDrawer ? 'Stay menu' : undefined"
    :data-open="isOpen"
    class="drawer fixed top-0 left-0 z-50 flex h-dvh w-[384px] max-w-[85vw] flex-col overflow-y-auto border-r border-hb-neutral-400 bg-hb-neutral-100 px-4 py-5 backdrop-blur-[2px] lg:sticky lg:z-auto lg:h-screen lg:w-[260px] lg:shrink-0 lg:visible lg:translate-x-0"
    :class="isOpen ? 'visible translate-x-0' : 'invisible -translate-x-full'"
  >
    <header class="flex items-center justify-between gap-3 border-b border-hb-neutral-400 pb-5">
      <img
        src="~/assets/images/logo.svg"
        alt="Maison Soleil"
        width="107"
        height="42"
        class="h-[42px] w-[107px]"
      >

      <IconButton
        ref="closeButton"
        label="Close menu"
        :icon="closeIcon"
        class="lg:hidden"
        @click="close"
      />
    </header>

    <Menu class="mt-5">
      <MenuItem selected :count="1" @click="close">
        <template #icon>
          <span class="grid size-5 place-items-center [&_svg]:size-5" v-html="doubleBedIcon" />
        </template>
        Your stay
      </MenuItem>
      <MenuItem @click="close">
        <template #icon>
          <span class="grid size-5 place-items-center [&_svg]:size-5" v-html="homeIcon" />
        </template>
        The house
      </MenuItem>
      <MenuItem @click="close">
        <template #icon>
          <span class="grid size-5 place-items-center [&_svg]:size-5" v-html="pinIcon" />
        </template>
        Around town
      </MenuItem>
      <MenuItem @click="close">
        <template #icon>
          <span class="grid size-5 place-items-center [&_svg]:size-5" v-html="foodIcon" />
        </template>
        Breakfast
      </MenuItem>
      <MenuItem @click="close">
        <template #icon>
          <span class="grid size-5 place-items-center [&_svg]:size-5" v-html="emailIcon" />
        </template>
        Messages
      </MenuItem>
    </Menu>

    <div class="mt-auto flex flex-col gap-5">
      <WeatherCard />

      <footer class="border-t border-dotted border-hb-neutral-400 pt-5 text-preset-10 text-hb-neutral-600">
        <p>Est. 1987</p>
        <p class="mt-2">Maison Soleil · 12 Rue des Oliviers · Cassis</p>
        <p class="mt-2">© 2026 Maison Soleil</p>
      </footer>
    </div>
  </aside>
</template>

<style scoped>
/*
 * `visibility` keeps the closed drawer out of the tab order. It must flip to
 * visible with zero duration on open, otherwise the element is still computed
 * as hidden on the frame we try to move focus into it — and focus() on a hidden
 * element fails silently. On close it is held back until the slide finishes.
 */
@media (max-width: 1023.98px) {
  .drawer {
    transition: transform 300ms ease-out, visibility 0s linear 300ms;
  }

  .drawer[data-open="true"] {
    transition: transform 300ms ease-out, visibility 0s linear 0s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .drawer {
    transition: none;
  }
}

.scrim-enter-active,
.scrim-leave-active {
  transition: opacity 300ms ease-out;
}

.scrim-enter-from,
.scrim-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .scrim-enter-active,
  .scrim-leave-active {
    transition: none;
  }
}
</style>
