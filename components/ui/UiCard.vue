<script setup lang="ts">
export type CardTone = "white" | "paper" | "sun" | "brand" | "violet" | "ink";

const props = withDefaults(
  defineProps<{
    as?: string;
    tone?: CardTone;
    padding?: "none" | "md" | "lg";
    /** Ombre pleine décalée */
    shadow?: boolean;
    /** Se soulève au survol */
    interactive?: boolean;
  }>(),
  { as: "div", tone: "white", padding: "md", shadow: true, interactive: false }
);

const tones: Record<CardTone, string> = {
  white: "bg-paper-50 text-ink",
  paper: "bg-paper-200 text-ink",
  sun: "bg-sun text-ink",
  brand: "bg-brand text-white",
  violet: "on-dark bg-violet-900 text-paper",
  ink: "on-dark bg-ink text-paper",
};

const paddings = { none: "", md: "p-5 md:p-6", lg: "p-6 md:p-10" };
</script>

<template>
  <component
    :is="props.as"
    class="relative border-2 border-ink"
    :class="[
      tones[props.tone],
      paddings[props.padding],
      props.shadow && 'shadow-hard-lg',
      props.interactive &&
        'transition-[transform,box-shadow] duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#170D24]',
    ]"
  >
    <slot />
  </component>
</template>
