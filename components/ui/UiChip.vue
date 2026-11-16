<script setup lang="ts">
const props = defineProps<{ active?: boolean }>();
</script>

<template>
  <button
    type="button"
    :aria-pressed="props.active"
    class="inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors duration-200"
    :class="
      props.active
        ? 'bg-plum-900 text-white'
        : 'bg-white text-plum-700 ring-1 ring-inset ring-paper-300 hover:bg-paper-50 hover:ring-plum-300'
    "
  >
    <slot />
  </button>
</template>
