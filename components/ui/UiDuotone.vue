<script setup lang="ts">
/**
 * Photo imprimée en bichromie (deux encres riso).
 * Remplit son parent, qui doit être positionné (relative/absolute).
 */
export type DuotoneTone = "red" | "violet" | "sun" | "blue";

const props = withDefaults(
  defineProps<{
    src: string;
    alt?: string;
    tone?: DuotoneTone;
    /** Révèle la photo d'origine au survol du parent `.group` */
    reveal?: boolean;
  }>(),
  { alt: "", tone: "red", reveal: false }
);

// [encre claire (hautes lumières), encre sombre (ombres)]
const tones: Record<DuotoneTone, [string, string]> = {
  red: ["bg-brand", "bg-violet-900"],
  violet: ["bg-violet-300", "bg-ink"],
  sun: ["bg-sun", "bg-brand-700"],
  blue: ["bg-[#9DB8F2]", "bg-riso-blue"],
};
</script>

<template>
  <div class="absolute inset-0 isolate overflow-hidden" :class="tones[props.tone][0]">
    <img
      :src="props.src"
      :alt="props.alt"
      loading="lazy"
      class="absolute inset-0 h-full w-full object-cover mix-blend-multiply contrast-[1.15] grayscale transition-transform duration-700 group-hover:scale-105"
    />
    <div
      class="absolute inset-0 mix-blend-lighten"
      :class="tones[props.tone][1]"
      aria-hidden="true"
    />
    <img
      v-if="props.reveal"
      :src="props.src"
      alt=""
      loading="lazy"
      class="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
    />
    <slot />
  </div>
</template>
