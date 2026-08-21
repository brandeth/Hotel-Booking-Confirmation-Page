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
      class="flex min-w-0 flex-1 flex-col overflow-hidden px-10 py-8"
    >
      <DashboardHeader guest-name="Lucia." />

      <StaySummary class="mt-12 self-center">
        <template #receipt>
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
        </template>
        <template #welcome>
          <WelcomeCard
            host-name="Margaux."
            message="We're so glad you're coming. The shutters will be open, the lemonade cold, and the cat – Poivre – pretending not to notice you."
            room-name="La Garrigue"
          />
        </template>
      </StaySummary>
    </main>
  </div>
</template>
