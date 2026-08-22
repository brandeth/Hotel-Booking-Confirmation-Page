/** Width at which the sidebar stops being a drawer and becomes a static column. */
export const SIDEBAR_BREAKPOINT = '(min-width: 1024px)'

/**
 * Shared open state for the stay navigation.
 *
 * Below `SIDEBAR_BREAKPOINT` the sidebar is a modal drawer opened from
 * `DashboardTopNav`; at or above it the sidebar is always visible and this
 * state is inert. The two element ids are handed out here so the trigger's
 * `aria-controls` and the panel's `id` cannot drift apart.
 */
export function useSidebar() {
  const isOpen = useState('sidebar-open', () => false)

  function open() {
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  function toggle() {
    isOpen.value = !isOpen.value
  }

  return {
    isOpen,
    open,
    close,
    toggle,
    sidebarId: 'stay-sidebar',
    triggerId: 'stay-sidebar-trigger',
  }
}
