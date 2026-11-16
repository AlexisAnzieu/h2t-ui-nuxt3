<script setup lang="ts">
import { bookThemes, type Book } from "~/data/bookThemes";

/** Fiche détaillée du livre sorti de l'étagère. */
const props = defineProps<{ book: Book }>();
const theme = computed(() => bookThemes[props.book.color] ?? bookThemes.blue);
</script>

<template>
  <article
    class="grid border-2 border-ink bg-paper-50 shadow-hard-lg md:grid-cols-[17rem_1fr]"
  >
    <!-- Couverture -->
    <div
      class="relative flex flex-col justify-between overflow-hidden border-ink p-6 text-white max-md:border-b-2 max-md:pb-14 md:min-h-[24rem] md:border-r-2"
      :class="theme.bg"
    >
      <span
        class="absolute inset-y-0 left-0 w-3 bg-ink/25"
        aria-hidden="true"
      />
      <span class="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] opacity-85">
        {{ theme.label }}
      </span>
      <div class="max-md:hidden" aria-hidden="true">
        <p
          class="hyphens-auto break-words font-display text-[2.1rem] font-black uppercase leading-[0.92] font-condensed"
        >
          {{ props.book.title }}
        </p>
        <p class="mt-3 font-medium opacity-90">{{ props.book.author }}</p>
      </div>
    </div>

    <!-- Quatrième de couverture -->
    <div class="flex flex-col p-6 md:p-8 md:pt-14">
      <p class="font-mono text-xs font-semibold uppercase tracking-[0.18em]">
        ✺ Quatrième de couverture
      </p>
      <h2 class="mt-3 font-display text-4xl font-black uppercase leading-[0.9] font-condensed md:text-5xl">
        {{ props.book.title }}
      </h2>
      <p class="mt-1 font-mono text-sm font-medium uppercase tracking-wider text-brand">
        {{ props.book.author }}
      </p>
      <p class="mt-5 max-w-prose text-lg font-medium leading-snug">
        {{ props.book.summary }}
      </p>
      <div class="mt-5 flex flex-wrap gap-2">
        <UiBadge v-for="tag in props.book.tags" :key="tag">{{ tag }}</UiBadge>
      </div>
      <div class="mt-auto pt-8">
        <UiButton
          v-if="props.book.link"
          :href="props.book.link"
          new-tab
          icon="arrow-up-right"
        >
          Se procurer le livre
        </UiButton>
      </div>
    </div>
  </article>
</template>
