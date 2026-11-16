<script setup lang="ts">
export type BadgeTone = "neutral" | "brand" | "plum" | "forest" | "ocean" | "clay";

const props = withDefaults(defineProps<{ tone?: BadgeTone }>(), {
  tone: "neutral",
});

const tones: Record<BadgeTone, string> = {
  neutral: "bg-paper-200 text-plum-700",
  brand: "bg-brand-50 text-brand-700",
  plum: "bg-plum-100 text-plum-700",
  forest: "bg-forest-100 text-forest-700",
  ocean: "bg-ocean-100 text-ocean-700",
  clay: "bg-clay-100 text-clay-700",
};
</script>

<template>
  <span
    class="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider"
    :class="tones[props.tone]"
  >
    <slot />
  </span>
</template>
