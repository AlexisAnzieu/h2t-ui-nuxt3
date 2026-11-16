<script setup lang="ts">
import { findNavItem } from "~/data/navigation";

/**
 * En-tête façon affiche : bandeau d'édition + titre géant ligne par ligne.
 */
const props = withDefaults(
  defineProps<{
    /** Nom de l'œuf (ex: "boiler") : sert au bandeau N° / légende */
    egg: string;
    /** Titre, une entrée par ligne */
    lines: string[];
    /** Index de la ligne imprimée en rouge */
    accent?: number;
    size?: "xl" | "lg";
  }>(),
  { accent: -1, size: "xl" }
);

const item = computed(() => findNavItem(props.egg));
</script>

<template>
  <header class="relative mb-12 md:mb-20">
    <div
      class="flex items-center gap-x-4 border-y-2 border-ink py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] md:text-xs"
    >
      <span class="bg-ink px-1.5 py-0.5 text-paper">N°{{ item?.number ?? "∗∗" }}</span>
      <span>.{{ props.egg }}</span>
      <span v-if="item" class="hidden md:inline">✺ {{ item.caption }}</span>
      <span class="ml-auto hidden sm:inline">Plateau-Mont-Royal, MTL</span>
    </div>

    <h1
      class="mt-6 text-balance font-display font-black uppercase leading-none tracking-[-0.01em] font-condensed md:mt-8"
      :class="
        props.size === 'xl'
          ? 'text-[clamp(3.4rem,10.5vw,9.5rem)]'
          : 'text-[clamp(2.6rem,6.5vw,5.75rem)]'
      "
    >
      <span
        v-for="(line, i) in props.lines"
        :key="i"
        class="block"
        :class="i === props.accent ? 'text-brand riso-violet' : 'riso'"
        >{{ line }}</span
      >
    </h1>

    <div
      v-if="$slots.default"
      class="mt-8 max-w-2xl text-pretty text-lg font-medium leading-snug md:text-[22px]"
    >
      <slot />
    </div>

    <div v-if="$slots.actions" class="mt-8 flex flex-wrap gap-4">
      <slot name="actions" />
    </div>
  </header>
</template>
