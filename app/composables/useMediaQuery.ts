/**
 * Tracks a CSS media query reactively.
 *
 * Always `false` during SSR and on the first client render, so any markup that
 * depends on it must hydrate identically on both sides — keep purely visual
 * breakpoint work in CSS (`lg:` utilities) and use this only for behaviour.
 */
export function useMediaQuery(query: string) {
  const matches = ref(false)

  let mediaQuery: MediaQueryList | undefined

  function sync() {
    matches.value = mediaQuery?.matches ?? false
  }

  onMounted(() => {
    mediaQuery = window.matchMedia(query)
    sync()
    mediaQuery.addEventListener('change', sync)
  })

  onBeforeUnmount(() => {
    mediaQuery?.removeEventListener('change', sync)
  })

  return matches
}
