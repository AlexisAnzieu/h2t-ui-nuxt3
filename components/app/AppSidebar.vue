<script setup lang="ts">
import { navigation, CONTACT_EMAIL, SOURCE_URL } from "~/data/navigation";
</script>

<template>
  <div class="on-dark flex h-full flex-col bg-brand text-white">
    <div class="shrink-0 px-5 pb-5 pt-6">
      <AppLogo />
      <p
        class="mt-4 max-w-[14rem] font-mono text-[10.5px] font-medium uppercase leading-relaxed tracking-[0.12em] text-white/85"
      >
        Plateforme intra-communautaire du Plateau-Mont-Royal
      </p>
    </div>

    <nav
      class="flex-1 overflow-y-auto border-b-2 border-ink/20 [scrollbar-width:none]"
      aria-label="Navigation principale"
    >
      <ul>
        <li v-for="item in navigation" :key="item.label">
          <AppNavItem :item="item" />
        </li>
      </ul>
    </nav>

    <footer
      class="flex shrink-0 items-center justify-between gap-3 px-5 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em]"
    >
      <a
        :href="`mailto:${CONTACT_EMAIL}`"
        class="underline decoration-white/40 underline-offset-4 hover:decoration-sun"
        >Contact</a
      >
      <a
        :href="SOURCE_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="underline decoration-white/40 underline-offset-4 hover:decoration-sun"
        >Code source ↗</a
      >
      <span class="text-white/70">MTL ♥</span>
    </footer>
  </div>
</template>
