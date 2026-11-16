<script setup lang="ts">
import { CONTACT_EMAIL, SOURCE_URL } from "~/data/navigation";
</script>

<template>
  <footer class="mt-24 overflow-hidden border-t-2 border-ink">
    <div
      class="flex flex-wrap items-center justify-between gap-3 px-5 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] sm:px-8 lg:px-12"
    >
      <span>Codé avec <span class="text-brand">♥</span> à Montréal</span>
      <span class="flex gap-5">
        <a :href="`mailto:${CONTACT_EMAIL}`" class="link">{{ CONTACT_EMAIL }}</a>
        <a :href="SOURCE_URL" target="_blank" rel="noopener noreferrer" class="link"
          >Code libre ↗</a
        >
      </span>
    </div>
    <p
      class="select-none whitespace-nowrap px-3 pb-2 text-center font-display text-[22vw] font-black uppercase leading-[0.78] tracking-tight font-condensed text-outline lg:text-[17.5vw]"
      aria-hidden="true"
    >
      H2T.club
    </p>
  </footer>
</template>
