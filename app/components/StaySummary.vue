<script setup lang="ts">
const summaryId = useId();

// The fan-out only exists at xl; below that the cards stay stacked, so the
// section must not advertise itself as interactive.
const canFan = useMediaQuery("(min-width: 1280px)");
</script>

<template>
  <section
    class="stay-summary"
    :tabindex="canFan ? 0 : undefined"
    :aria-labelledby="canFan ? summaryId : undefined"
    aria-label="Stay summary"
  >
    <div class="stay-summary__stage">
      <img
        src="~/assets/images/sun-alt.svg"
        alt=""
        width="164"
        height="164"
        class="stay-summary__sun"
        aria-hidden="true"
      />

      <div class="stay-summary__card stay-summary__card--receipt">
        <slot name="receipt" />
      </div>

      <div class="stay-summary__card stay-summary__card--welcome">
        <slot name="welcome" />
      </div>
    </div>

    <p
      :id="summaryId"
      class="stay-summary__caption text-preset-8 text-hb-neutral-600"
      :aria-hidden="canFan ? undefined : true"
    >
      <img
        src="~/assets/images/symbol.svg"
        alt=""
        width="8"
        height="8"
        class="size-2"
        aria-hidden="true"
      />
      Hover to fan
      <img
        src="~/assets/images/symbol.svg"
        alt=""
        width="8"
        height="8"
        class="size-2"
        aria-hidden="true"
      />
    </p>
  </section>
</template>

<style scoped>
/*
 * The two card angles live in custom properties, not in the transforms. Every
 * tier needs the same pair of angles in the rest state, the fanned state and
 * the reduced-motion state, and restating them per rule is how they drift.
 * A tier that should not fan sets `--fan-*` equal to its rest values, which
 * turns the hover rules below into no-ops instead of needing overrides.
 */
.stay-summary {
  --tilt-receipt: -4deg;
  --tilt-welcome: 4deg;
  --fan-x: 90px;
  --fan-tilt-receipt: 5deg;
  --fan-tilt-welcome: -5deg;
  --sun-active-opacity: 1;
  --sun-active-scale: 1;

  display: flex;
  width: max-content;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  outline: none;
}

.stay-summary:focus-visible {
  border-radius: 24px;
  box-shadow:
    0 0 0 3px var(--color-hb-neutral-100),
    0 0 0 5px var(--color-hb-terracotta-600);
}

.stay-summary__stage {
  position: relative;
  display: flex;
  width: min(980px, 100%);
  align-items: flex-start;
  justify-content: center;
  padding: 20px 24px;
}

.stay-summary__sun {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 0;
  width: 164px;
  height: 164px;
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.85);
  transition:
    opacity 400ms ease-out 0.25s,
    transform 500ms ease-out 0.25s;
}

.stay-summary__card {
  position: relative;
  width: 400px;
  height: 420px;
  flex: none;
  transform-origin: center;
  transition: transform 500ms ease-out 0.25s;
}

.stay-summary__card--receipt {
  z-index: 10;
  transform: rotate(var(--tilt-receipt));
}

.stay-summary__card--welcome {
  z-index: 20;
  margin-left: -6px;
  transform: rotate(var(--tilt-welcome));
}

.stay-summary:hover .stay-summary__card--receipt,
.stay-summary:focus-within .stay-summary__card--receipt {
  transform: translateX(calc(-1 * var(--fan-x))) rotate(var(--fan-tilt-receipt));
}

.stay-summary:hover .stay-summary__card--welcome,
.stay-summary:focus-within .stay-summary__card--welcome {
  transform: translateX(var(--fan-x)) rotate(var(--fan-tilt-welcome));
}

.stay-summary:hover .stay-summary__sun,
.stay-summary:focus-within .stay-summary__sun {
  opacity: var(--sun-active-opacity);
  transform: translate(-50%, -50%) scale(var(--sun-active-scale));
}

.stay-summary__caption {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
}

/* Below xl the pair is static: no fan, no sun, no caption to invite a hover. */
@media (max-width: 1279.98px) {
  .stay-summary {
    --fan-x: 0px;
    --fan-tilt-receipt: var(--tilt-receipt);
    --fan-tilt-welcome: var(--tilt-welcome);
    --sun-active-opacity: 0;
    --sun-active-scale: 0.85;
  }

  .stay-summary__card {
    width: 340px;
  }

  .stay-summary__caption {
    display: none;
  }
}

/*
 * 768–1023: the sidebar is a drawer, so `main` is the full viewport minus its
 * own 48px of padding — 720px at exactly 768. The pair needs 674px, which
 * leaves 46px for the stage, not the 48px it asks for at 24px a side.
 */
@media (min-width: 768px) and (max-width: 1023.98px) {
  .stay-summary__stage {
    padding-inline: 12px;
  }
}

/*
 * Below md the pair stacks, welcome card on top, each one full width and as
 * tall as its content.
 *
 * `order` puts the welcome card first visually while the DOM keeps the receipt
 * first for the desktop left-to-right reading. That divergence is inert here:
 * neither card contains a focusable element, and the section itself is only
 * `tabindex="0"` at xl (see `canFan`), so there is no focus order to break.
 *
 * The 8px inset per side is not decoration. A rotated box is wider than its
 * border box by `w·cos θ + h·sin θ`; at 2deg on a ~430px-tall card the extra
 * is ~15px. At a full 100% the tilted corners would land outside `main` and be
 * eaten by its `overflow-x-clip` — the exact clipping this tier exists to fix.
 * Change the angle and this number has to be recomputed.
 *
 * The stage keeps its 20px of vertical padding and drops the horizontal: the
 * card inset above is what buys the tilt its room now.
 */
@media (max-width: 767.98px) {
  .stay-summary {
    --tilt-receipt: -2deg;
    --tilt-welcome: 2deg;

    width: 100%;
  }

  .stay-summary__stage {
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    gap: 16px;
  }

  /*
   * The cap matters at the top of this tier, not the bottom: at 767px a card
   * left at 100% would be 700px wide and 420px tall. 400px is the width the
   * pair already uses at xl, so the 767 → 768 switch to the side-by-side pair
   * is a re-arrangement rather than a jump in card size.
   */
  .stay-summary__card {
    width: calc(100% - 16px);
    max-width: 400px;
    height: auto;
  }

  .stay-summary__card--welcome {
    order: -1;
    margin-left: 0;
  }
}

/*
 * With no transition to carry it, reduced motion shows the active state at
 * rest. Each tier has already defined what "active" means for itself, so this
 * needs no per-tier variants.
 */
@media (prefers-reduced-motion: reduce) {
  .stay-summary__sun,
  .stay-summary__card {
    transition: none;
  }

  .stay-summary__sun {
    opacity: var(--sun-active-opacity);
    transform: translate(-50%, -50%) scale(var(--sun-active-scale));
  }

  .stay-summary__card--receipt {
    transform: translateX(calc(-1 * var(--fan-x))) rotate(var(--fan-tilt-receipt));
  }

  .stay-summary__card--welcome {
    transform: translateX(var(--fan-x)) rotate(var(--fan-tilt-welcome));
  }
}
</style>
