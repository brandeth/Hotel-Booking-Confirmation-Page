<script setup lang="ts">
import doubleBedIcon from '~/assets/images/double-bed.svg?raw'
import homeIcon from '~/assets/images/home.svg?raw'
import pinIcon from '~/assets/images/pin.svg?raw'
import foodIcon from '~/assets/images/food.svg?raw'
import emailIcon from '~/assets/images/email.svg?raw'
</script>

<template>
  <aside class="sticky top-0 flex h-screen w-[260px] shrink-0 flex-col border-r border-hb-neutral-400 bg-hb-neutral-100 px-4 py-5 backdrop-blur-[2px]">
    <header class="border-b border-hb-neutral-400 pb-5">
      <img
        src="~/assets/images/logo.svg"
        alt="Maison Soleil"
        width="107"
        height="42"
        class="h-[42px] w-[107px]"
      >
    </header>

    <Menu class="mt-5">
      <MenuItem selected :count="1">
        <template #icon>
          <span class="grid size-5 place-items-center [&_svg]:size-5" v-html="doubleBedIcon" />
        </template>
        Your stay
      </MenuItem>
      <MenuItem>
        <template #icon>
          <span class="grid size-5 place-items-center [&_svg]:size-5" v-html="homeIcon" />
        </template>
        The house
      </MenuItem>
      <MenuItem>
        <template #icon>
          <span class="grid size-5 place-items-center [&_svg]:size-5" v-html="pinIcon" />
        </template>
        Around town
      </MenuItem>
      <MenuItem>
        <template #icon>
          <span class="grid size-5 place-items-center [&_svg]:size-5" v-html="foodIcon" />
        </template>
        Breakfast
      </MenuItem>
      <MenuItem>
        <template #icon>
          <span class="grid size-5 place-items-center [&_svg]:size-5" v-html="emailIcon" />
        </template>
        Messages
      </MenuItem>
    </Menu>

    <div class="mt-auto flex flex-col gap-5">
      <WeatherCard />

      <footer class="border-t border-dotted border-hb-neutral-400 pt-5 text-preset-10 uppercase text-hb-neutral-600">
        <p>Est. 1987</p>
        <p class="mt-2">Maison Soleil · 12 Rue des Oliviers · Cassis</p>
        <p class="mt-2">© 2026 Maison Soleil</p>
      </footer>
    </div>
  </aside>
</template>
