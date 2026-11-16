<script setup lang="ts">
export type BadgeTone = "outline" | "ink" | "brand" | "sun" | "violet";

const props = withDefaults(
  defineProps<{ tone?: BadgeTone; tilt?: boolean }>(),
  { tone: "outline", tilt: false }
);

// Tampon encreur
const tones: Record<BadgeTone, string> = {
  outline: "border-current",
  ink: "border-ink bg-ink text-paper",
  brand: "border-ink bg-brand text-white",
  sun: "border-ink bg-sun text-ink",
  violet: "border-ink bg-violet-700 text-white",
};
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 whitespace-nowrap border-2 px-2 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider"
    :class="[tones[props.tone], props.tilt && '-rotate-2']"
  >
    <slot />
  </span>
</template>
