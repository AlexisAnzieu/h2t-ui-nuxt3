<script setup lang="ts">
const props = defineProps<{ active?: boolean }>();
</script>

<template>
  <button
    type="button"
    :aria-pressed="props.active"
    class="inline-flex h-11 items-center gap-2 border-2 border-ink px-4 font-display text-sm font-extrabold uppercase tracking-wide font-semicondensed transition-all duration-150"
    :class="
      props.active
        ? 'bg-ink text-paper shadow-hard-brand'
        : 'bg-paper-50 text-ink hover:-translate-y-0.5 hover:bg-sun'
    "
  >
    <slot />
  </button>
</template>
