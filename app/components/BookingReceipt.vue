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
        <h1 id="receipt-title" class="receipt-title">Your stay</h1>
      </div>

      <p class="receipt-reference text-preset-10 text-hb-neutral-600">
        <span>№ {{ receiptNumber }}</span>
        <span>{{ confirmationCode }}</span>
      </p>
    </header>

    <section class="stay-dates" aria-label="Stay dates">
      <div v-for="(stayDate, label) in { 'Check in': checkIn, 'Check out': checkOut }" :key="label" class="stay-date">
        <p class="text-preset-10 text-hb-neutral-600">{{ label }}</p>
        <p class="stay-date-value">
          {{ dateParts(stayDate.iso).day }} {{ dateParts(stayDate.iso).month }}
        </p>
        <p class="stay-date-meta">
          {{ dateParts(stayDate.iso).weekday }} · {{ stayDate.time }}
        </p>
      </div>
    </section>

    <section class="receipt-items" aria-label="Charges">
      <div v-for="item in items" :key="item.label" class="receipt-row" :class="{ 'receipt-row-muted': item.muted }">
        <span>{{ item.label }}</span>
        <span class="receipt-amount">{{ currencySymbol }}&nbsp;{{ formatAmount(item.amount) }}</span>
      </div>
    </section>

    <section class="receipt-total" aria-label="Total paid">
      <p class="receipt-total-label">Total paid</p>
      <p class="receipt-total-value">
        <span aria-hidden="true">{{ currencySymbol }}</span>{{ formatAmount(total) }}
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

.receipt-title,
.stay-date-value,
.receipt-total-value {
  font-family: Georgia, "Times New Roman", ui-serif, serif;
  font-weight: 500;
}

.receipt-title {
  margin-top: 6px;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.015em;
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
  font-size: 32px;
  line-height: 34px;
  letter-spacing: -0.035em;
  white-space: nowrap;
}

.stay-date-meta {
  margin-top: 1px;
  color: var(--color-hb-neutral-700);
  font-size: 14px;
  line-height: 20px;
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
  font-size: 14px;
  line-height: 20px;
}

.receipt-row-muted {
  color: var(--color-hb-neutral-700);
}

.receipt-amount {
  flex: none;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
}

.receipt-total {
  display: flex;
  min-height: 65px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.receipt-total-label {
  color: var(--color-hb-neutral-600);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.receipt-total-value {
  display: flex;
  align-items: baseline;
  gap: 3px;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -0.035em;
  font-variant-numeric: tabular-nums;
}

.receipt-footer {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
}

.receipt-footer img {
  width: 93px;
  height: 28px;
  flex: none;
}

@media (max-width: 380px) {
  .booking-receipt {
    height: auto;
    min-height: 420px;
    padding-inline: 20px;
  }

  .stay-date-value {
    font-size: 28px;
  }

  .stay-date-meta {
    font-size: 12px;
  }

  .receipt-row {
    font-size: 13px;
  }
}
</style>
