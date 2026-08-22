import type { ComponentPublicInstance, Ref } from 'vue'

/**
 * Design-token introspection.
 *
 * The style guide has exactly one source of truth: `app/assets/css/main.css`.
 * Nothing here re-declares a token value — every number, hex, and font name the
 * design-system page shows is read back out of the browser at runtime, so the
 * documentation cannot drift away from the CSS it documents.
 */

export interface TypeMetrics {
  family: string
  style: string
  size: string
  leading: string
  tracking: string
  transform: string
}

const WEIGHT_NAMES: Record<string, string> = {
  100: 'Thin',
  200: 'ExtraLight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold',
  900: 'Black',
}

type ElementRef = (el: Element | ComponentPublicInstance | null) => void

/**
 * Registers elements by key and derives a value from each one after mount.
 * Measuring the rendered element — rather than the declared token — means the
 * page reports what the browser actually applies, cascade conflicts included.
 */
function useElementProbe<T>(read: (el: HTMLElement) => T): {
  probeRef: (key: string) => ElementRef
  values: Ref<Record<string, T>>
  measure: () => void
} {
  const elements = new Map<string, HTMLElement>()
  const values = shallowRef<Record<string, T>>({})

  function measure() {
    const next: Record<string, T> = {}

    for (const [key, element] of elements) {
      next[key] = read(element)
    }

    values.value = next
  }

  function probeRef(key: string): ElementRef {
    return (el) => {
      if (el instanceof HTMLElement) {
        elements.set(key, el)
      }
      else {
        elements.delete(key)
      }
    }
  }

  onMounted(() => nextTick(measure))

  return { probeRef, values, measure }
}

function familyName(stack: string) {
  return (stack.split(',')[0] ?? '').trim().replace(/^["']|["']$/g, '')
}

function asPercentage(lineHeight: string, fontSize: string) {
  const leading = Number.parseFloat(lineHeight)
  const size = Number.parseFloat(fontSize)

  if (!Number.isFinite(leading) || !Number.isFinite(size) || size === 0) {
    return lineHeight
  }

  return `${Math.round((leading / size) * 100)}%`
}

function readTypeMetrics(el: HTMLElement): TypeMetrics {
  const styles = getComputedStyle(el)
  const weight = WEIGHT_NAMES[styles.fontWeight] ?? styles.fontWeight

  return {
    family: familyName(styles.fontFamily),
    style: styles.fontStyle === 'italic' ? `${weight} Italic` : weight,
    size: styles.fontSize,
    leading: asPercentage(styles.lineHeight, styles.fontSize),
    tracking: styles.letterSpacing === 'normal' ? '0px' : styles.letterSpacing,
    transform: styles.textTransform === 'none' ? '' : styles.textTransform,
  }
}

/** Reads CSS custom properties off `:root`, keyed by variable name. */
export function useCssVariables(names: string[]) {
  const values = shallowRef<Record<string, string>>({})

  onMounted(() => {
    const styles = getComputedStyle(document.documentElement)
    const next: Record<string, string> = {}

    for (const name of names) {
      next[name] = styles.getPropertyValue(name).trim()
    }

    values.value = next
  })

  return values
}

/** Reports the type styling a browser actually resolves for a sample element. */
export function useTypeMetrics() {
  const { probeRef, values } = useElementProbe(readTypeMetrics)

  return { typeRef: probeRef, typeMetrics: values }
}

/** Reports the rendered width of a sample element, rounded to whole pixels. */
export function useMeasuredWidths() {
  const { probeRef, values } = useElementProbe(
    el => `${Math.round(el.getBoundingClientRect().width)}px`,
  )

  return { widthRef: probeRef, widths: values }
}
