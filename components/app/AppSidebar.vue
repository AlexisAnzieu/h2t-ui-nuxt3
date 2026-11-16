<script setup lang="ts">
import { homeItem, eggs, CONTACT_EMAIL, SOURCE_URL } from "~/data/navigation";
</script>

<template>
  <div class="flex h-full flex-col bg-plum-950 text-white">
    <div class="flex h-20 shrink-0 items-center px-6">
      <AppLogo />
    </div>

    <nav
      class="flex-1 overflow-y-auto px-3 pb-6 [scrollbar-width:thin] [scrollbar-color:theme(colors.plum.700)_transparent]"
      aria-label="Navigation principale"
    >
      <AppNavTile :item="homeItem" />

      <p class="eyebrow mb-3 mt-7 px-3 text-plum-400">Les œufs</p>
      <ul class="space-y-2">
        <li v-for="egg in eggs" :key="egg.label">
          <AppNavTile :item="egg" />
        </li>
      </ul>
    </nav>

    <footer
      class="shrink-0 border-t border-white/10 px-6 py-5 text-sm text-plum-300"
    >
      <div class="flex items-center gap-4">
        <a
          :href="`mailto:${CONTACT_EMAIL}`"
          class="inline-flex items-center gap-2 transition-colors hover:text-white"
        >
          <UiIcon name="mail" :size="16" />
          Contact
        </a>
        <a
          :href="SOURCE_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 transition-colors hover:text-white"
        >
          <UiIcon name="github" :size="16" />
          Code source
        </a>
      </div>
      <p class="mt-3 font-mono text-[11px] text-plum-500">
        Codé avec <span class="text-brand-400">♥</span> à Montréal
      </p>
    </footer>
  </div>
</template>
