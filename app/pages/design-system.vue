<script setup lang="ts">
definePageMeta({
  name: 'design-system',
})

const requestUrl = useRequestURL()

useSeoMeta({
  title: 'Haven Design System',
  description: 'The foundations and components behind a warm, thoughtful hotel booking experience.',
  ogTitle: 'Haven Design System',
  ogDescription: 'Build with warmth, down to the details.',
  ogType: 'website',
  ogImage: `${requestUrl.origin}/og.png`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Haven Design System',
  twitterDescription: 'Build with warmth, down to the details.',
  twitterImage: `${requestUrl.origin}/og.png`,
})

const neutralColors = [
  { name: 'neutral-900', value: '#2B2620' },
  { name: 'neutral-800', value: '#3E3428' },
  { name: 'neutral-700', value: '#5A4C3C' },
  { name: 'neutral-600', value: '#7A6A57' },
  { name: 'neutral-400', value: '#E4DED5' },
  { name: 'neutral-200', value: '#F2EEEA' },
  { name: 'neutral-100', value: '#FBF6EF' },
  { name: 'neutral-50', value: '#FDFBF7' },
  { name: 'neutral-0', value: '#FFFFFF' },
]

const accentColors = [
  { family: 'Sun', colors: [
    { name: 'sun-500', value: '#EDB63A' },
    { name: 'sun-300', value: '#F5D98A' },
    { name: 'sun-200', value: '#FFDE7A' },
    { name: 'sun-50', value: '#FFF4DC' },
  ] },
  { family: 'Terracotta', colors: [
    { name: 'terracotta-700', value: '#9F3E1D' },
    { name: 'terracotta-600', value: '#B7411B' },
    { name: 'terracotta-500', value: '#C25A2E' },
    { name: 'terracotta-400', value: '#E07A3F' },
  ] },
  { family: 'Supporting', colors: [
    { name: 'blue-500', value: '#5769C6' },
    { name: 'rose-500', value: '#C04A72' },
  ] },
]

const textPresets = [
  { name: 'text-preset-1', className: 'text-preset-1', family: 'Fraunces', style: 'Regular', size: '40px', leading: '120%', tracking: '-0.5px' },
  { name: 'text-preset-1-italic', className: 'text-preset-1-italic', family: 'Fraunces', style: 'Italic', size: '40px', leading: '120%', tracking: '-0.5px' },
  { name: 'text-preset-2', className: 'text-preset-2', family: 'Fraunces', style: 'Regular', size: '32px', leading: '120%', tracking: '-0.25px' },
  { name: 'text-preset-3', className: 'text-preset-3', family: 'Fraunces', style: 'Regular', size: '24px', leading: '140%', tracking: '-0.2px' },
  { name: 'text-preset-4', className: 'text-preset-4', family: 'Fraunces', style: 'Regular', size: '20px', leading: '140%', tracking: '-0.1px' },
  { name: 'text-preset-4-italic', className: 'text-preset-4-italic', family: 'Fraunces', style: 'Italic', size: '20px', leading: '140%', tracking: '-0.1px' },
  { name: 'text-preset-5', className: 'text-preset-5', family: 'Fraunces', style: 'Regular', size: '14px', leading: '140%', tracking: '0px' },
  { name: 'text-preset-5-medium', className: 'text-preset-5-medium', family: 'DM Sans', style: 'Medium', size: '14px', leading: '120%', tracking: '0px' },
  { name: 'text-preset-5-semibold', className: 'text-preset-5-semibold', family: 'DM Sans', style: 'SemiBold', size: '14px', leading: '120%', tracking: '0.3px' },
  { name: 'text-preset-7', className: 'text-preset-7', family: 'DM Sans', style: 'Regular', size: '12px', leading: '120%', tracking: '0.4px' },
  { name: 'text-preset-8', className: 'text-preset-8', family: 'DM Mono', style: 'Regular', size: '12px', leading: '140%', tracking: '2px' },
  { name: 'text-preset-9', className: 'text-preset-9', family: 'DM Mono', style: 'Regular', size: '12px', leading: '140%', tracking: '0px' },
  { name: 'text-preset-10', className: 'text-preset-10', family: 'DM Mono', style: 'Regular', size: '10px', leading: '140%', tracking: '1px' },
]

const spacingTokens = [
  { name: '1', value: '4px', width: '4px' },
  { name: '2', value: '8px', width: '8px' },
  { name: '3', value: '12px', width: '12px' },
  { name: '4', value: '16px', width: '16px' },
  { name: '5', value: '20px', width: '20px' },
  { name: '6', value: '24px', width: '24px' },
  { name: '8', value: '32px', width: '32px' },
  { name: '12', value: '48px', width: '48px' },
  { name: '16', value: '64px', width: '64px' },
]

const receiptItems = [
  { label: 'Room · La Garrigue × 4 nights', amount: 620 },
  { label: 'Breakfast × 2 guests', amount: 96 },
  { label: 'Tourist tax', amount: 14.4, muted: true },
]
</script>

<template>
  <div class="min-h-screen bg-hb-neutral-50 text-hb-neutral-900">
    <header class="border-b border-hb-neutral-400/70 bg-hb-neutral-50/90 backdrop-blur">
      <div class="mx-auto flex h-18 max-w-360 items-center justify-between px-5 sm:px-8">
        <a href="#top" class="group flex items-center gap-3" aria-label="Haven design system home">
          <span class="grid size-9 place-items-center rounded-full bg-hb-neutral-900 text-sm font-semibold text-hb-neutral-0 transition-colors duration-200 group-hover:bg-hb-neutral-800">H</span>
          <span>
            <span class="block text-sm font-semibold tracking-tight">Haven</span>
            <span class="block text-[10px] font-medium uppercase tracking-[0.2em] text-hb-neutral-600">Design system</span>
          </span>
        </a>
        <div class="flex items-center gap-3">
          <span class="hidden rounded-full bg-hb-neutral-200 px-3 py-1.5 text-xs font-medium text-hb-neutral-700 sm:inline">v0.1 · Foundations</span>
          <span class="size-2 rounded-full bg-hb-terracotta-500" aria-hidden="true" />
        </div>
      </div>
    </header>

    <div id="top" class="mx-auto grid max-w-360 lg:grid-cols-[240px_minmax(0,1fr)]">
      <aside class="hidden border-r border-hb-neutral-400/70 px-8 py-12 lg:block">
        <nav aria-label="Design system navigation" class="sticky top-8 space-y-8">
          <div>
            <p class="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-hb-neutral-600">Foundations</p>
            <ul class="space-y-1 text-sm">
              <li><a class="nav-link" href="#colors">Colors</a></li>
              <li><a class="nav-link" href="#typography">Typography</a></li>
              <li><a class="nav-link" href="#spacing">Spacing</a></li>
            </ul>
          </div>
          <div>
            <p class="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-hb-neutral-600">Components</p>
            <ul class="space-y-1 text-sm">
              <li><a class="nav-link" href="#button">Button</a></li>
              <li><a class="nav-link" href="#booking-receipt">Booking receipt</a></li>
              <li><a class="nav-link" href="#menu-item">Menu item</a></li>
              <li><a class="nav-link" href="#welcome-card">Welcome card</a></li>
            </ul>
          </div>
        </nav>
      </aside>

      <main class="min-w-0">
        <section class="relative overflow-hidden border-b border-hb-neutral-400/70 px-5 py-18 sm:px-10 sm:py-24 xl:px-16">
          <div class="pointer-events-none absolute -right-14 -top-24 size-72 rounded-full bg-hb-sun-200/55 blur-3xl" />
          <div class="pointer-events-none absolute bottom-0 right-1/4 size-32 rounded-full bg-hb-rose-500/10 blur-3xl" />
          <div class="relative max-w-3xl">
            <p class="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-hb-terracotta-700">
              <span class="h-px w-8 bg-hb-terracotta-500" />
              A shared language for thoughtful stays
            </p>
            <h1 class="max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-7xl">
              Build with warmth,<br><span class="text-hb-neutral-600">down to the details.</span>
            </h1>
            <p class="mt-7 max-w-xl text-base leading-7 text-hb-neutral-700 sm:text-lg">
              The foundations and components behind our hotel booking experience—designed to feel calm, clear, and quietly confident.
            </p>
            <div class="mt-10 flex flex-wrap gap-3">
              <a href="#colors" class="inline-flex items-center gap-2 rounded-full bg-hb-neutral-900 px-5 py-3 text-sm font-semibold text-hb-neutral-0 transition-colors duration-200 ease-out hover:bg-hb-neutral-800">
                Explore foundations <span aria-hidden="true">↓</span>
              </a>
              <a href="#button" class="inline-flex items-center rounded-full border border-hb-neutral-400 px-5 py-3 text-sm font-semibold transition-colors duration-200 hover:border-hb-neutral-600 hover:bg-hb-neutral-100">
                View components
              </a>
            </div>
          </div>
        </section>

        <section id="colors" class="section-block">
          <div class="section-heading">
            <div>
              <p class="eyebrow">01 · Foundations</p>
              <h2 class="section-title">Color</h2>
            </div>
            <p class="section-description">A sun-washed palette grounded in natural neutrals, with expressive accents used to guide and delight.</p>
          </div>

          <div class="mt-10">
            <h3 class="mb-4 text-sm font-semibold">Neutral</h3>
            <div class="grid overflow-hidden rounded-2xl border border-hb-neutral-400 sm:grid-cols-3 xl:grid-cols-5">
              <article v-for="color in neutralColors" :key="color.name" class="group min-w-0 bg-hb-neutral-0 p-3">
                <div class="aspect-[4/3] rounded-xl border border-black/5 shadow-inner" :style="{ backgroundColor: color.value }" />
                <div class="mt-3 flex items-baseline justify-between gap-2 px-1">
                  <span class="truncate text-xs font-semibold">{{ color.name }}</span>
                  <span class="font-mono text-[10px] uppercase text-hb-neutral-600">{{ color.value }}</span>
                </div>
              </article>
            </div>
          </div>

          <div class="mt-10 grid gap-8 xl:grid-cols-3">
            <article v-for="family in accentColors" :key="family.family">
              <h3 class="mb-4 text-sm font-semibold">{{ family.family }}</h3>
              <div class="overflow-hidden rounded-2xl border border-hb-neutral-400 bg-hb-neutral-0">
                <div v-for="color in family.colors" :key="color.name" class="flex items-center gap-4 border-b border-hb-neutral-200 p-3 last:border-b-0">
                  <span class="size-12 shrink-0 rounded-xl border border-black/5 shadow-inner" :style="{ backgroundColor: color.value }" />
                  <span class="min-w-0 flex-1 text-xs font-semibold">{{ color.name }}</span>
                  <span class="font-mono text-[10px] uppercase text-hb-neutral-600">{{ color.value }}</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="typography" class="section-block border-t border-hb-neutral-400/70">
          <div class="section-heading">
            <div>
              <p class="eyebrow">02 · Foundations</p>
              <h2 class="section-title">Typography</h2>
            </div>
            <p class="section-description">Named text presets from the style guide. Use the class, not one-off size and tracking values.</p>
          </div>

          <div class="mt-10 overflow-hidden rounded-2xl border border-hb-neutral-400 bg-hb-neutral-0">
            <div v-for="preset in textPresets" :key="preset.name" class="type-row">
              <div class="type-meta">
                <span>{{ preset.name }}</span>
                <span>{{ preset.family }} · {{ preset.style }}</span>
                <span>{{ preset.size }} / {{ preset.leading }} / {{ preset.tracking }}</span>
              </div>
              <p :class="preset.className">The quick brown fox jumps over the lazy dog.</p>
            </div>
          </div>
        </section>

        <section id="spacing" class="section-block border-t border-hb-neutral-400/70">
          <div class="section-heading">
            <div>
              <p class="eyebrow">03 · Foundations</p>
              <h2 class="section-title">Spacing</h2>
            </div>
            <p class="section-description">A four-pixel base creates a consistent rhythm from compact controls to generous page layouts.</p>
          </div>

          <div class="mt-10 grid gap-px overflow-hidden rounded-2xl border border-hb-neutral-400 bg-hb-neutral-400 sm:grid-cols-2 xl:grid-cols-4">
            <article v-for="space in spacingTokens" :key="space.name" class="bg-hb-neutral-0 p-5">
              <div class="flex h-20 items-end">
                <div class="rounded-sm bg-hb-terracotta-500" :style="{ width: space.width, height: space.width }" />
              </div>
              <div class="mt-4 flex items-center justify-between border-t border-hb-neutral-200 pt-3">
                <code class="text-xs font-semibold">space-{{ space.name }}</code>
                <span class="text-xs text-hb-neutral-600">{{ space.value }}</span>
              </div>
            </article>
          </div>
        </section>

        <section id="button" class="section-block border-t border-hb-neutral-400/70">
          <div class="section-heading">
            <div>
              <p class="eyebrow">01 · Components</p>
              <h2 class="section-title">Button</h2>
            </div>
            <p class="section-description">The primary action component. Clear, grounded, and responsive across pointer and keyboard interactions.</p>
          </div>

          <div class="mt-10 overflow-hidden rounded-2xl border border-hb-neutral-400 bg-hb-neutral-0">
            <div class="grid min-h-72 place-items-center bg-[radial-gradient(circle_at_center,_var(--color-hb-neutral-200)_1px,_transparent_1px)] bg-[size:18px_18px] p-8">
              <div class="flex flex-wrap items-center justify-center gap-6">
                <div class="text-center">
                  <BaseButton>Confirm booking</BaseButton>
                  <p class="mt-3 text-[11px] font-medium text-hb-neutral-600">Default</p>
                </div>
                <div class="text-center">
                  <BaseButton variant="secondary">Add to calendar</BaseButton>
                  <p class="mt-3 text-[11px] font-medium text-hb-neutral-600">Secondary</p>
                </div>
                <div class="text-center">
                  <BaseButton disabled>Confirm booking</BaseButton>
                  <p class="mt-3 text-[11px] font-medium text-hb-neutral-600">Disabled</p>
                </div>
              </div>
            </div>
            <div class="border-t border-hb-neutral-400 p-5">
              <div>
                <p class="text-xs font-semibold">Interaction</p>
                <p class="mt-1 text-xs text-hb-neutral-600">Hover transitions to neutral-800. Keyboard focus uses neutral-100 and terracotta-600 rings.</p>
              </div>
              <pre class="mt-4 overflow-x-auto rounded-lg bg-hb-neutral-100 px-3 py-2"><code class="whitespace-nowrap font-mono text-[11px] text-hb-neutral-700">&lt;BaseButton&gt;Confirm booking&lt;/BaseButton&gt;</code></pre>
            </div>
          </div>

          <div class="mt-8 grid gap-5 sm:grid-cols-3">
            <article class="guideline-card">
              <span class="guideline-number">01</span>
              <h3>Lead with a verb</h3>
              <p>Make the outcome clear: “Confirm booking” instead of “Continue.”</p>
            </article>
            <article class="guideline-card">
              <span class="guideline-number">02</span>
              <h3>One primary action</h3>
              <p>Use a single primary button per section to maintain hierarchy.</p>
            </article>
            <article class="guideline-card">
              <span class="guideline-number">03</span>
              <h3>Respect the state</h3>
              <p>Disable only when the next action is genuinely unavailable.</p>
            </article>
          </div>
        </section>

        <section id="booking-receipt" class="section-block border-t border-hb-neutral-400/70">
          <div class="section-heading">
            <div>
              <p class="eyebrow">02 · Components</p>
              <h2 class="section-title">Booking receipt</h2>
            </div>
            <p class="section-description">A compact confirmation summary that makes stay dates, charges, and payment details easy to scan.</p>
          </div>

          <div class="mt-10 overflow-hidden rounded-2xl border border-hb-neutral-400 bg-hb-neutral-0">
            <div class="grid min-h-144 place-items-center overflow-hidden bg-hb-neutral-100 px-4 py-12 sm:px-8">
              <BookingReceipt
                receipt-number="MS-2026"
                confirmation-code="0421-AH"
                :check-in="{ iso: '2026-04-25', time: '15:00' }"
                :check-out="{ iso: '2026-04-29', time: '11:00' }"
                :items="receiptItems"
                :total="730.4"
                currency="EUR"
                payment-provider="Wise"
                payment-currency="GBP"
              />
            </div>
            <div class="border-t border-hb-neutral-400 p-5">
              <p class="text-xs font-semibold">Usage</p>
              <p class="mt-1 text-xs leading-5 text-hb-neutral-600">Provide ISO dates and numeric amounts; the component formats dates and currency according to its locale and currency props.</p>
              <pre class="mt-4 overflow-x-auto rounded-lg bg-hb-neutral-100 px-3 py-2"><code class="whitespace-nowrap font-mono text-[11px] text-hb-neutral-700">&lt;BookingReceipt :items=&quot;items&quot; :total=&quot;730.4&quot; currency=&quot;EUR&quot; /&gt;</code></pre>
            </div>
          </div>

          <div class="mt-8 grid gap-5 sm:grid-cols-3">
            <article class="guideline-card">
              <span class="guideline-number">01</span>
              <h3>Use confirmed values</h3>
              <p>Show final stay dates and settled charges rather than estimates.</p>
            </article>
            <article class="guideline-card">
              <span class="guideline-number">02</span>
              <h3>Keep labels concise</h3>
              <p>Preserve a clean edge between descriptions and right-aligned amounts.</p>
            </article>
            <article class="guideline-card">
              <span class="guideline-number">03</span>
              <h3>Localize the details</h3>
              <p>Pass the appropriate locale and currency for each booking.</p>
            </article>
          </div>
        </section>

        <section id="menu-item" class="section-block border-t border-hb-neutral-400/70">
          <div class="section-heading">
            <div>
              <p class="eyebrow">03 · Components</p>
              <h2 class="section-title">Menu item</h2>
            </div>
            <p class="section-description">A compact navigation action that pairs a clear label with an optional icon and item count.</p>
          </div>

          <div class="mt-10 overflow-hidden rounded-2xl border border-hb-neutral-400 bg-hb-neutral-0">
            <div class="grid min-h-72 place-items-center bg-hb-neutral-100 p-8">
              <div class="w-full max-w-sm rounded-xl border border-hb-neutral-400 bg-hb-neutral-100 p-4 sm:p-5">
                <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-hb-neutral-600">Menu item states</p>
                <div class="mt-4 space-y-4">
                  <div>
                    <p class="mb-1.5 text-[10px] font-medium text-hb-neutral-600">Default</p>
                    <MenuItem :count="1">Your stay</MenuItem>
                  </div>
                  <div>
                    <p class="mb-1.5 text-[10px] font-medium text-hb-neutral-600">Hover</p>
                    <MenuItem class="menu-item-demo" data-demo-state="hover" :count="1">Your stay</MenuItem>
                  </div>
                  <div>
                    <p class="mb-1.5 text-[10px] font-medium text-hb-neutral-600">Active</p>
                    <MenuItem class="menu-item-demo" data-demo-state="active" :count="1">Your stay</MenuItem>
                  </div>
                  <div>
                    <p class="mb-1.5 text-[10px] font-medium text-hb-neutral-600">Keyboard focus</p>
                    <MenuItem class="menu-item-demo" data-demo-state="focus" :count="1">Your stay</MenuItem>
                  </div>
                </div>
              </div>
            </div>
            <div class="border-t border-hb-neutral-400 p-5">
              <div>
                <p class="text-xs font-semibold">Interaction</p>
                <p class="mt-1 text-xs text-hb-neutral-600">Transparent by default, with neutral surfaces for hover and active states, plus a terracotta keyboard-focus ring.</p>
              </div>
              <pre class="mt-4 overflow-x-auto rounded-lg bg-hb-neutral-100 px-3 py-2"><code class="whitespace-nowrap font-mono text-[11px] text-hb-neutral-700">&lt;MenuItem :count=&quot;1&quot;&gt;Your stay&lt;/MenuItem&gt;</code></pre>
            </div>
          </div>

          <div class="mt-8 grid gap-5 sm:grid-cols-3">
            <article class="guideline-card">
              <span class="guideline-number">01</span>
              <h3>Keep labels brief</h3>
              <p>Use a short noun or phrase that makes the destination easy to scan.</p>
            </article>
            <article class="guideline-card">
              <span class="guideline-number">02</span>
              <h3>Use counts meaningfully</h3>
              <p>Show the badge only when the number helps someone understand available content.</p>
            </article>
            <article class="guideline-card">
              <span class="guideline-number">03</span>
              <h3>Preserve the rhythm</h3>
              <p>Keep the component at 40px high with consistent spacing between grouped items.</p>
            </article>
          </div>
        </section>

        <section id="welcome-card" class="section-block border-t border-hb-neutral-400/70">
          <div class="section-heading">
            <div>
              <p class="eyebrow">04 · Components</p>
              <h2 class="section-title">Welcome card</h2>
            </div>
            <p class="section-description">A host note for the confirmation page. Warm, personal, and sized to sit beside the booking receipt.</p>
          </div>

          <div class="mt-10 overflow-hidden rounded-2xl border border-hb-neutral-400 bg-hb-neutral-0">
            <div class="grid min-h-144 place-items-center bg-hb-neutral-900 px-4 py-16 sm:px-8">
              <WelcomeCard
                host-name="Margaux."
                message="We're so glad you're coming. The shutters will be open, the lemonade cold, and the cat – Poivre – pretending not to notice you."
                room-name="La Garrigue"
              />
            </div>
            <div class="border-t border-hb-neutral-400 p-5">
              <p class="text-xs font-semibold">Usage</p>
              <p class="mt-1 text-xs leading-5 text-hb-neutral-600">Pass the host name, welcome note, and room name from the booking. Labels default to the confirmation copy.</p>
              <pre class="mt-4 overflow-x-auto rounded-lg bg-hb-neutral-100 px-3 py-2"><code class="whitespace-nowrap font-mono text-[11px] text-hb-neutral-700">&lt;WelcomeCard host-name=&quot;Margaux.&quot; room-name=&quot;La Garrigue&quot; message=&quot;We're so glad you're coming.&quot; /&gt;</code></pre>
            </div>
          </div>

          <div class="mt-8 grid gap-5 sm:grid-cols-3">
            <article class="guideline-card">
              <span class="guideline-number">01</span>
              <h3>Use the real host voice</h3>
              <p>Show the confirmed host name and a short note written for this stay, not placeholder copy.</p>
            </article>
            <article class="guideline-card">
              <span class="guideline-number">02</span>
              <h3>Keep the note brief</h3>
              <p>The card is a fixed 420px. A few sentences is enough; longer messages will crowd the room label.</p>
            </article>
            <article class="guideline-card">
              <span class="guideline-number">03</span>
              <h3>Pair with the receipt</h3>
              <p>Match the 400×420 footprint so the welcome card and booking receipt can sit side by side.</p>
            </article>
          </div>
        </section>

        <footer class="border-t border-hb-neutral-400/70 px-5 py-10 sm:px-10 xl:px-16">
          <div class="flex flex-col gap-3 text-xs text-hb-neutral-600 sm:flex-row sm:items-center sm:justify-between">
            <p>Haven Design System · Built for calm, confident journeys.</p>
            <a href="#top" class="font-semibold text-hb-neutral-800 transition-colors duration-200 hover:text-hb-neutral-900">Back to top ↑</a>
          </div>
        </footer>
      </main>
    </div>
  </div>
</template>

<style scoped>
.menu-item-demo[data-demo-state="hover"] {
  background: var(--color-hb-neutral-0);
}

.menu-item-demo[data-demo-state="active"] {
  background: var(--color-hb-neutral-200);
  color: var(--color-hb-neutral-900);
}

.menu-item-demo[data-demo-state="focus"] {
  background: var(--color-hb-neutral-0);
  box-shadow:
    0 0 0 2px var(--color-hb-neutral-100),
    0 0 0 4px var(--color-hb-terracotta-600);
}
</style>
