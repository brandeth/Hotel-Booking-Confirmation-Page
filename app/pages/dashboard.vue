<script setup lang="ts">
import keyIcon from '~/assets/images/key.svg?raw'
import wirelessIcon from '~/assets/images/wireless.svg?raw'
import foodAltIcon from '~/assets/images/food-alt.svg?raw'

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

const stayInfoCards: {
  label: string
  checkInfo: string
  date?: string
  instructions?: string
  wifi?: { network: string, password: string }
  iconBgClass: string
  accentClass: string
  icon: string
}[] = [
  {
    label: 'Arrival',
    checkInfo: 'Check-in from 15:00',
    date: 'Sat, 25 April',
    instructions: 'Ring the brass bell by the blue door. If we\'re at the market, the key is in the terracotta pot by the olive tree.',
    iconBgClass: 'bg-hb-terracotta-600',
    accentClass: 'text-hb-terracotta-600',
    icon: keyIcon,
  },
  {
    label: 'Wi-Fi',
    checkInfo: 'Le Soleil · Guest',
    date: 'Password below',
    wifi: { network: 'Le Soleil · Guest', password: 'soleil-2026' },
    iconBgClass: 'bg-hb-blue-500',
    accentClass: 'text-hb-blue-500',
    icon: wirelessIcon,
  },
  {
    label: 'Breakfast',
    checkInfo: 'Served 8 – 10:30',
    date: 'On the terrace',
    instructions: 'Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.',
    iconBgClass: 'bg-hb-rose-500',
    accentClass: 'text-hb-rose-500',
    icon: foodAltIcon,
  },
]
</script>

<template>
  <div class="flex min-h-screen bg-hb-neutral-100 text-hb-neutral-900">
    <Sidebar />

    <main
      class="flex min-w-0 flex-1 flex-col overflow-y-auto px-8 py-8 xl:px-10"
    >
      <DashboardHeader guest-name="Lucia." />

      <StaySummary class="mt-8 self-center xl:mt-12">
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

      <ul class="mt-8 grid list-none grid-cols-1 gap-[24px] md:grid-cols-2 xl:mt-12 xl:grid-cols-3">
        <li v-for="(card, index) in stayInfoCards" :key="card.label">
          <StayInfoCard
            :label="card.label"
            :count="index + 1"
            :check-info="card.checkInfo"
            :date="card.date"
            :instructions="card.instructions"
            :wifi="card.wifi"
            :icon-bg-class="card.iconBgClass"
            :accent-class="card.accentClass"
          >
            <template #icon>
              <span class="grid size-6 place-items-center [&_svg]:size-6" v-html="card.icon" />
            </template>
          </StayInfoCard>
        </li>
      </ul>
    </main>
  </div>
</template>
