<script setup lang="ts">
useSeoMeta({
  title: 'Haven — Find your next stay',
  description: 'Thoughtful stays, simply booked. Discover warm hotels and memorable places with Haven.',
})
</script>

<template>
  <div class="min-h-screen overflow-hidden bg-hb-neutral-50 text-hb-neutral-900">
    <header class="relative z-20">
      <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <NuxtLink to="/" class="group flex items-center gap-3" aria-label="Haven home">
          <span class="grid size-10 place-items-center rounded-full bg-hb-neutral-900 text-sm font-semibold text-hb-neutral-0 transition-colors duration-200 group-hover:bg-hb-neutral-800">H</span>
          <span class="text-lg font-semibold tracking-[-0.03em]">Haven</span>
        </NuxtLink>

        <nav class="flex items-center gap-2 sm:gap-6" aria-label="Primary navigation">
          <a href="#why-haven" class="hidden text-sm font-medium text-hb-neutral-700 transition-colors duration-200 hover:text-hb-neutral-900 sm:inline">Why Haven</a>
          <NuxtLink to="/design-system" class="rounded-full border border-hb-neutral-400 px-4 py-2 text-xs font-semibold text-hb-neutral-800 transition-colors duration-200 hover:border-hb-neutral-600 hover:bg-hb-neutral-100 sm:text-sm">
            Design system
          </NuxtLink>
        </nav>
      </div>
    </header>

    <main>
      <section class="relative">
        <div class="pointer-events-none absolute -right-32 -top-32 size-128 rounded-full bg-hb-sun-200/60 blur-3xl" />
        <div class="pointer-events-none absolute -left-36 top-1/3 size-80 rounded-full bg-hb-terracotta-400/10 blur-3xl" />

        <div class="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.72fr)] lg:py-20">
          <div class="max-w-3xl">
            <p class="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-hb-terracotta-700">
              <span class="h-px w-8 bg-hb-terracotta-500" />
              Thoughtful stays, simply booked
            </p>

            <h1 class="text-6xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-[6.5rem]">
              Find a place<br>
              <span class="text-hb-neutral-600">that feels right.</span>
            </h1>

            <p class="mt-7 max-w-xl text-base leading-7 text-hb-neutral-700 sm:text-lg">
              Handpicked hotels, honest details, and a booking experience that gives you room to breathe.
            </p>

            <form class="mt-10 grid gap-2 rounded-3xl border border-hb-neutral-400 bg-hb-neutral-0 p-2 shadow-[0_22px_70px_rgba(62,52,40,0.10)] sm:grid-cols-[1.35fr_1fr_auto]" @submit.prevent>
              <label class="rounded-2xl px-4 py-3 transition-colors duration-200 focus-within:bg-hb-neutral-100">
                <span class="block text-[10px] font-semibold uppercase tracking-[0.14em] text-hb-neutral-600">Destination</span>
                <input
                  type="text"
                  placeholder="Where would you like to go?"
                  class="mt-1 w-full bg-transparent text-sm text-hb-neutral-900 outline-none placeholder:text-hb-neutral-600"
                >
              </label>

              <label class="rounded-2xl border-t border-hb-neutral-200 px-4 py-3 transition-colors duration-200 focus-within:bg-hb-neutral-100 sm:border-l sm:border-t-0">
                <span class="block text-[10px] font-semibold uppercase tracking-[0.14em] text-hb-neutral-600">Check in</span>
                <input
                  type="date"
                  class="mt-1 w-full bg-transparent text-sm text-hb-neutral-800 outline-none"
                >
              </label>

              <BaseButton type="submit" class="w-full sm:w-auto">Search stays</BaseButton>
            </form>

            <div class="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs font-medium text-hb-neutral-600">
              <span class="flex items-center gap-2"><span class="size-1.5 rounded-full bg-hb-terracotta-500" /> No booking fees</span>
              <span class="flex items-center gap-2"><span class="size-1.5 rounded-full bg-hb-sun-500" /> Flexible options</span>
              <span class="flex items-center gap-2"><span class="size-1.5 rounded-full bg-hb-blue-500" /> Human support</span>
            </div>
          </div>

          <aside class="relative mx-auto w-full max-w-md lg:justify-self-end" aria-label="Featured stay">
            <div class="absolute -left-8 -top-8 size-28 rounded-full bg-hb-sun-500" />
            <div class="absolute -bottom-6 -right-6 size-40 rounded-full border-[28px] border-hb-rose-500/20" />

            <article class="relative overflow-hidden rounded-[2rem] bg-hb-neutral-900 text-hb-neutral-0 shadow-[0_28px_90px_rgba(43,38,32,0.25)]">
              <div class="relative flex aspect-[4/3] items-end overflow-hidden bg-hb-terracotta-500 p-6">
                <div class="absolute -right-8 -top-10 size-56 rounded-full bg-hb-sun-300" />
                <div class="absolute right-16 top-18 size-24 rounded-full bg-hb-sun-50" />
                <div class="absolute -bottom-12 left-6 h-52 w-40 rounded-t-full bg-hb-neutral-800" />
                <div class="absolute bottom-0 right-0 h-36 w-2/3 rounded-tl-[5rem] bg-hb-neutral-100" />
                <span class="relative rounded-full bg-hb-neutral-0/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-hb-neutral-900 backdrop-blur">Editor’s pick</span>
              </div>

              <div class="p-6 sm:p-7">
                <div class="flex items-start justify-between gap-6">
                  <div>
                    <p class="text-[10px] font-semibold uppercase tracking-[0.16em] text-hb-sun-300">Lisbon, Portugal</p>
                    <h2 class="mt-2 text-2xl font-semibold tracking-[-0.03em]">Casa do Sol</h2>
                  </div>
                  <div class="text-right">
                    <p class="text-[10px] text-hb-neutral-400">from</p>
                    <p class="mt-1 text-lg font-semibold">$184<span class="text-xs font-normal text-hb-neutral-400"> / night</span></p>
                  </div>
                </div>

                <div class="mt-6 flex items-center justify-between border-t border-hb-neutral-700 pt-5 text-xs text-hb-neutral-400">
                  <span>Courtyard · Breakfast · Old Town</span>
                  <span class="text-hb-sun-300">★ 4.9</span>
                </div>
              </div>
            </article>
          </aside>
        </div>
      </section>

      <section id="why-haven" class="border-t border-hb-neutral-400/70 bg-hb-neutral-0">
        <div class="mx-auto grid max-w-7xl gap-10 px-5 py-18 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-hb-terracotta-700">Why Haven</p>
            <h2 class="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">Less searching.<br>More looking forward.</h2>
          </div>

          <div class="grid gap-px overflow-hidden rounded-3xl border border-hb-neutral-400 bg-hb-neutral-400 sm:grid-cols-3">
            <article class="bg-hb-neutral-50 p-6">
              <span class="text-xs font-semibold text-hb-terracotta-600">01</span>
              <h3 class="mt-10 text-base font-semibold">Carefully selected</h3>
              <p class="mt-2 text-sm leading-6 text-hb-neutral-600">Every property is chosen for character, comfort, and genuine hospitality.</p>
            </article>
            <article class="bg-hb-neutral-50 p-6">
              <span class="text-xs font-semibold text-hb-terracotta-600">02</span>
              <h3 class="mt-10 text-base font-semibold">Clear from the start</h3>
              <p class="mt-2 text-sm leading-6 text-hb-neutral-600">Straightforward details and pricing, without surprises at checkout.</p>
            </article>
            <article class="bg-hb-neutral-50 p-6">
              <span class="text-xs font-semibold text-hb-terracotta-600">03</span>
              <h3 class="mt-10 text-base font-semibold">Here when needed</h3>
              <p class="mt-2 text-sm leading-6 text-hb-neutral-600">Helpful human support before, during, and after every stay.</p>
            </article>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-hb-neutral-400/70 bg-hb-neutral-0">
      <div class="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-hb-neutral-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© 2026 Haven. Stay somewhere memorable.</p>
        <NuxtLink to="/design-system" class="font-semibold text-hb-neutral-800 transition-colors duration-200 hover:text-hb-neutral-900">View design system →</NuxtLink>
      </div>
    </footer>
  </div>
</template>
