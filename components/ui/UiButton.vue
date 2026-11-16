<script setup lang="ts">
import type { IconName } from "./UiIcon.vue";

const props = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "ghost" | "dark";
    size?: "sm" | "md" | "lg";
    /** Route interne */
    to?: string;
    /** Lien externe, mailto ou fichier statique */
    href?: string;
    /** Ouvre le lien dans un nouvel onglet */
    newTab?: boolean;
    /** Icône à droite (se décale au survol) */
    icon?: IconName;
    iconLeft?: IconName;
    type?: "button" | "submit";
    disabled?: boolean;
    loading?: boolean;
  }>(),
  {
    variant: "primary",
    size: "md",
    type: "button",
  }
);

const variants = {
  primary:
    "bg-brand-500 text-white shadow-sm hover:bg-brand-600 active:bg-brand-700",
  secondary:
    "bg-white text-plum-900 ring-1 ring-inset ring-paper-300 hover:bg-paper-50 hover:ring-plum-300",
  ghost: "text-plum-700 hover:bg-plum-100 hover:text-plum-900",
  dark: "bg-plum-900 text-white hover:bg-plum-800",
};

const sizes = {
  sm: "h-9 gap-1.5 px-3.5 text-sm",
  md: "h-11 gap-2 px-5 text-[15px]",
  lg: "h-14 gap-2.5 px-7 text-base",
};

const classes = computed(() => [
  "group inline-flex select-none items-center justify-center whitespace-nowrap rounded-full font-semibold transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  variants[props.variant],
  sizes[props.size],
]);

const iconSize = computed(() => (props.size === "lg" ? 20 : 18));
const isLink = computed(() => Boolean(props.to || props.href));
</script>

<template>
  <NuxtLink
    v-if="isLink"
    :to="props.to ?? props.href"
    :external="Boolean(props.href)"
    :target="props.newTab ? '_blank' : undefined"
    :rel="props.newTab ? 'noopener noreferrer' : undefined"
    :class="classes"
  >
    <UiIcon v-if="props.iconLeft" :name="props.iconLeft" :size="iconSize" />
    <slot />
    <UiIcon
      v-if="props.icon"
      :name="props.icon"
      :size="iconSize"
      class="transition-transform duration-200 group-hover:translate-x-0.5"
    />
  </NuxtLink>
  <button
    v-else
    :type="props.type"
    :class="classes"
    :disabled="props.disabled || props.loading"
    :aria-busy="props.loading || undefined"
  >
    <span
      v-if="props.loading"
      class="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
      aria-hidden="true"
    />
    <UiIcon v-else-if="props.iconLeft" :name="props.iconLeft" :size="iconSize" />
    <slot />
    <UiIcon v-if="props.icon" :name="props.icon" :size="iconSize" />
  </button>
</template>
