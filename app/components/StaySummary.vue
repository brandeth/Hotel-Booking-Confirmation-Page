<script setup lang="ts">
const summaryId = useId();
const canFan = ref(false);

let mediaQuery: MediaQueryList | undefined;

function syncCanFan() {
  canFan.value = mediaQuery?.matches ?? false;
}

onMounted(() => {
  mediaQuery = window.matchMedia("(min-width: 1280px)");
  syncCanFan();
  mediaQuery.addEventListener("change", syncCanFan);
});

onBeforeUnmount(() => {
  mediaQuery?.removeEventListener("change", syncCanFan);
});
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
.stay-summary {
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
  transform: rotate(-4deg);
}

.stay-summary__card--welcome {
  z-index: 20;
  margin-left: -6px;
  transform: rotate(4deg);
}

.stay-summary:hover .stay-summary__card--receipt,
.stay-summary:focus-within .stay-summary__card--receipt {
  transform: translateX(-90px) rotate(5deg);
}

.stay-summary:hover .stay-summary__card--welcome,
.stay-summary:focus-within .stay-summary__card--welcome {
  transform: translateX(90px) rotate(-5deg);
}

.stay-summary:hover .stay-summary__sun,
.stay-summary:focus-within .stay-summary__sun {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.stay-summary__caption {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
}

@media (max-width: 1279px) {
  .stay-summary__card {
    width: 340px;
  }

  .stay-summary__card--welcome {
    margin-left: -6px;
  }

  .stay-summary__caption {
    display: none;
  }

  .stay-summary:hover .stay-summary__card--receipt,
  .stay-summary:focus-within .stay-summary__card--receipt {
    transform: rotate(-4deg);
  }

  .stay-summary:hover .stay-summary__card--welcome,
  .stay-summary:focus-within .stay-summary__card--welcome {
    transform: rotate(4deg);
  }

  .stay-summary:hover .stay-summary__sun,
  .stay-summary:focus-within .stay-summary__sun {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.85);
  }
}

@media (prefers-reduced-motion: reduce) {
  .stay-summary__sun,
  .stay-summary__card {
    transition: none;
  }

  .stay-summary__sun {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  .stay-summary__card--receipt {
    transform: translateX(-90px) rotate(5deg);
  }

  .stay-summary__card--welcome {
    transform: translateX(90px) rotate(-5deg);
  }

  @media (max-width: 1279px) {
    .stay-summary__sun {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.85);
    }

    .stay-summary__card--receipt {
      transform: rotate(-4deg);
    }

    .stay-summary__card--welcome {
      transform: rotate(4deg);
    }
  }
}
</style>
