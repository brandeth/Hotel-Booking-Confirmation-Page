<script setup lang="ts">
useSeoMeta({
  title: "Your stay — Maison Soleil",
  description:
    "Your booking at Maison Soleil is confirmed. Check-in details, a note from your host, and everything you need for your stay in Cassis.",
});

const receiptItems = [
  { label: "Room · La Garrigue × 4 nights", amount: 620 },
  { label: "Breakfast × 2 guests", amount: 96 },
  { label: "Tourist tax", amount: 14.4, muted: true },
];
</script>

<template>
  <div class="flex min-h-screen bg-hb-neutral-100 text-hb-neutral-900">
    <Sidebar />

    <main
      class="flex min-w-0 flex-1 items-start justify-center overflow-hidden px-6 py-16 sm:px-10 lg:px-16"
    >
      <div class="flex flex-col items-center">
        <div class="relative flex shrink-0 items-start">
          <div class="relative z-0 w-[400px] shrink-0 -rotate-4">
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
          <div class="relative -ml-1.5 z-10 w-[400px] shrink-0 rotate-4">
            <WelcomeCard
              host-name="Margaux."
              message="We're so glad you're coming. The shutters will be open, the lemonade cold, and the cat – Poivre – pretending not to notice you."
              room-name="La Garrigue"
            />
          </div>
        </div>

        <p
          class="mt-10 flex items-center gap-2 text-preset-8 text-hb-neutral-600"
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
      </div>
    </main>
  </div>
</template>
