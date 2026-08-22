<script setup lang="ts">
interface StayDate {
  iso: string
  time: string
}

interface ReceiptItem {
  label: string
  amount: number
  muted?: boolean
}

const props = withDefaults(defineProps<{
  receiptNumber: string
  confirmationCode: string
  checkIn: StayDate
  checkOut: StayDate
  items: ReceiptItem[]
  total: number
  currency?: string
  locale?: string
  paymentProvider: string
  paymentCurrency: string
}>(), {
  currency: 'EUR',
  locale: 'en-GB',
})

const dateParts = (iso: string) => {
  const date = new Date(`${iso}T12:00:00Z`)

  return {
    day: new Intl.DateTimeFormat(props.locale, {
      day: '2-digit',
      timeZone: 'UTC',
    }).format(date),
    month: new Intl.DateTimeFormat(props.locale, {
      month: 'short',
      timeZone: 'UTC',
    }).format(date),
    weekday: new Intl.DateTimeFormat(props.locale, {
      weekday: 'long',
      timeZone: 'UTC',
    }).format(date),
  }
}

const currencySymbol = computed(() => {
  const parts = new Intl.NumberFormat(props.locale, {
    style: 'currency',
    currency: props.currency,
    currencyDisplay: 'narrowSymbol',
  }).formatToParts(0)

  return parts.find(part => part.type === 'currency')?.value ?? props.currency
})

const formatAmount = (amount: number) => new Intl.NumberFormat(props.locale, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}).format(amount)
</script>

<template>
  <article class="booking-receipt" aria-labelledby="receipt-title">
    <header class="receipt-header">
      <div>
        <p class="text-preset-10 text-hb-neutral-600">Receipt</p>
        <h1 id="receipt-title" class="text-preset-4 text-hb-neutral-900">Your stay</h1>
      </div>

      <p class="receipt-reference text-preset-10 text-hb-neutral-600">
        <span>№&nbsp;{{ receiptNumber }}</span>
        <span>{{ confirmationCode }}</span>
      </p>
    </header>

    <section class="stay-dates" aria-label="Stay dates">
      <div v-for="(stayDate, label) in { 'Check In': checkIn, 'Check Out': checkOut }" :key="label" class="stay-date">
        <p class="text-preset-10 text-hb-neutral-600">{{ label }}</p>
        <p class="stay-date-value text-preset-2 text-hb-neutral-900">
          {{ dateParts(stayDate.iso).day }} {{ dateParts(stayDate.iso).month }}
        </p>
        <p class="stay-date-meta text-preset-7 text-hb-neutral-700">
          {{ dateParts(stayDate.iso).weekday }} · {{ stayDate.time }}
        </p>
      </div>
    </section>

    <section class="receipt-items" aria-label="Charges">
      <div v-for="item in items" :key="item.label" class="receipt-row">
        <span class="text-preset-5 text-hb-neutral-900">{{ item.label }}</span>
        <span class="receipt-amount text-preset-9 text-hb-neutral-900">
          <span>{{ currencySymbol }}</span>
          <span>{{ formatAmount(item.amount) }}</span>
        </span>
      </div>
    </section>

    <section class="receipt-total" aria-label="Total paid">
      <p class="text-preset-8 text-hb-neutral-600">Total paid</p>
      <p class="receipt-total-value text-preset-3 text-hb-neutral-900">
        <span>{{ currencySymbol }}</span>
        <span>{{ formatAmount(total) }}</span>
      </p>
    </section>

    <footer class="receipt-footer">
      <p class="text-preset-10 text-hb-neutral-600">
        Paid · {{ paymentProvider }} · {{ paymentCurrency }}
      </p>
      <img src="~/assets/images/barcode.svg" alt="" width="93" height="28">
    </footer>
  </article>
</template>

<style scoped>
.booking-receipt {
  box-sizing: border-box;
  width: min(400px, 100%);
  height: 420px;
  padding: 24px;
  overflow: hidden;
  border-radius: 20px;
  background: var(--color-hb-neutral-50);
  color: var(--color-hb-neutral-900);
  box-shadow:
    0 1px 0 rgb(0 0 0 / 3%),
    0 16px 30px -20px rgb(62 44 30 / 35%),
    0 20px 40px -30px rgb(62 44 30 / 16%);
}

.receipt-header {
  display: flex;
  min-height: 59px;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px dashed var(--color-hb-neutral-400);
}

.receipt-total-value {
  display: flex;
  align-items: baseline;
  gap: 0.25em;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.receipt-reference {
  display: grid;
  gap: 2px;
  text-align: right;
}

.stay-dates {
  display: grid;
  min-height: 118px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  align-items: start;
  padding-top: 20px;
  border-bottom: 1px dashed var(--color-hb-neutral-400);
}

.stay-date {
  min-width: 0;
  text-align: center;
}

.stay-date-value {
  margin-top: 10px;
  white-space: nowrap;
}

.stay-date-meta {
  margin-top: 1px;
  white-space: nowrap;
}

.receipt-items {
  display: grid;
  gap: 7px;
  padding: 13px 0 14px;
  border-bottom: 1px solid var(--color-hb-neutral-600);
}

.receipt-row {
  display: flex;
  min-width: 0;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
}

.receipt-amount {
  display: flex;
  flex: none;
  align-items: baseline;
  gap: 0.25em;
  font-variant-numeric: tabular-nums;
}

.receipt-total {
  display: flex;
  min-height: 65px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.receipt-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.receipt-footer img {
  width: 93px;
  height: 28px;
  flex: none;
}

@media (max-width: 1279px) {
  .booking-receipt {
    width: min(340px, 100%);
  }
}

@media (max-width: 380px) {
  .booking-receipt {
    height: auto;
    min-height: 420px;
    padding-inline: 20px;
  }
}
</style>
