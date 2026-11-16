<script setup lang="ts">
const props = defineProps<{
  /** Petit label au-dessus du titre, ex: ".boiler" */
  eyebrow?: string;
  title: string;
}>();
</script>

<template>
  <header class="mb-10 md:mb-14">
    <p v-if="props.eyebrow" class="eyebrow mb-4 flex items-center gap-3">
      <span class="h-px w-8 bg-brand-500" aria-hidden="true" />
      {{ props.eyebrow }}
    </p>
    <h1
      class="max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-plum-900 md:text-6xl"
    >
      {{ props.title }}
    </h1>
    <div
      v-if="$slots.default"
      class="mt-5 max-w-prose text-pretty text-lg leading-relaxed text-plum-600"
    >
      <slot />
    </div>
    <div v-if="$slots.actions" class="mt-8 flex flex-wrap gap-3">
      <slot name="actions" />
    </div>
  </header>
</template>
