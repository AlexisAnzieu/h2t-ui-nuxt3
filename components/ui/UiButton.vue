<script setup lang="ts">
import type { IconName } from "./UiIcon.vue";

const props = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "dark" | "sun";
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

// Bouton « tampon » : bordure d'encre et ombre pleine qui s'écrase au clic
const variants = {
  primary: "bg-brand text-white shadow-hard",
  secondary: "bg-paper-50 text-ink shadow-hard",
  dark: "bg-ink text-paper shadow-hard-brand",
  sun: "bg-sun text-ink shadow-hard",
};

const sizes = {
  sm: "h-10 gap-2 px-4 text-xs",
  md: "h-12 gap-2.5 px-5 text-sm",
  lg: "h-14 gap-3 px-7 text-base",
};

const classes = computed(() => [
  "group inline-flex select-none items-center justify-center whitespace-nowrap border-2 border-ink font-display font-extrabold uppercase tracking-wide font-semicondensed transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none disabled:pointer-events-none disabled:opacity-50",
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
