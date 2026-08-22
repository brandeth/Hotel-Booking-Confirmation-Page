<script setup lang="ts">
const props = withDefaults(defineProps<{
  label: string
  count: number
  checkInfo: string
  date?: string
  instructions?: string
  wifi?: { network: string, password: string }
  iconBgClass?: string
  accentClass?: string
}>(), {
  date: undefined,
  instructions: undefined,
  wifi: undefined,
  iconBgClass: 'bg-hb-terracotta-600',
  accentClass: 'text-hb-terracotta-600',
})

const titleId = useId()
const copied = ref(false)
let copiedTimeout: ReturnType<typeof setTimeout> | undefined

const paddedCount = computed(() => String(props.count).padStart(2, '0'))

async function copyPassword() {
  if (!props.wifi?.password) {
    return
  }

  try {
    await navigator.clipboard.writeText(props.wifi.password)
    copied.value = true
    clearTimeout(copiedTimeout)
    copiedTimeout = setTimeout(() => {
      copied.value = false
    }, 1500)
  }
  catch {
    copied.value = false
  }
}

onBeforeUnmount(() => {
  clearTimeout(copiedTimeout)
})
</script>

<template>
  <article
    class="flex h-full w-full flex-col gap-6 rounded-[24px] border border-hb-neutral-400 bg-hb-neutral-50 px-4 py-6 shadow-stay-info-card sm:px-5"
    :aria-labelledby="titleId"
  >
    <header class="flex items-center justify-between gap-3">
      <div class="flex min-w-0 items-center gap-3">
        <span
          class="grid size-10 shrink-0 place-items-center rounded-xl text-white [&_path]:fill-current [&_svg]:size-6"
          :class="iconBgClass"
          aria-hidden="true"
        >
          <slot name="icon" />
        </span>
        <p class="text-preset-6 truncate uppercase" :class="accentClass">{{ label }}</p>
      </div>
      <p class="text-preset-3 shrink-0" :class="accentClass">{{ paddedCount }}</p>
    </header>

    <div class="flex min-h-0 flex-1 flex-col gap-4">
      <div>
        <h2 :id="titleId" class="text-preset-3 text-hb-neutral-900">{{ checkInfo }}</h2>
        <p v-if="date" class="text-preset-7 text-hb-neutral-600">{{ date }}</p>
      </div>

      <div v-if="wifi" class="flex flex-1 flex-col gap-1">
        <div class="flex min-h-8 items-center justify-between rounded-lg bg-hb-neutral-200 px-2.5 py-0">
          <span class="text-preset-8 text-hb-neutral-600">Network</span>
          <span class="text-preset-7 text-hb-neutral-900">{{ wifi.network }}</span>
        </div>
        <div class="flex min-h-8 items-center justify-between rounded-lg bg-hb-neutral-200 px-2.5 py-0">
          <span class="text-preset-8 text-hb-neutral-600">Password</span>
          <div class="flex items-center gap-2.5">
            <span class="text-preset-7 text-hb-neutral-900">{{ wifi.password }}</span>
            <button
              type="button"
              class="inline-flex h-5 items-center rounded-full border border-hb-neutral-400 pt-1 pr-2 pb-0.5 pl-2 text-preset-10 text-hb-neutral-600"
              :aria-label="copied ? 'Password copied' : 'Copy password'"
              @click="copyPassword"
            >
              {{ copied ? 'Copied' : 'Copy' }}
            </button>
          </div>
        </div>
      </div>

      <p
        v-else-if="instructions"
        class="flex-1 text-preset-5-regular text-hb-neutral-700"
      >
        {{ instructions }}
      </p>
    </div>
  </article>
</template>
