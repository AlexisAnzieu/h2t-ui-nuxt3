<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string;
    /** Espacement intérieur */
    padding?: "none" | "md" | "lg";
    /** Légère élévation au survol */
    interactive?: boolean;
  }>(),
  { as: "div", padding: "md", interactive: false }
);

const paddings = {
  none: "",
  md: "p-6",
  lg: "p-6 md:p-8",
};
</script>

<template>
  <component
    :is="props.as"
    class="relative overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-paper-200"
    :class="[
      paddings[props.padding],
      props.interactive &&
        'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift',
    ]"
  >
    <slot />
  </component>
</template>
