<script setup lang="ts">
import { bookThemes, hashString, type Book } from "~/data/bookThemes";

/** Un livre posé à plat dans une pile : tranche lisible horizontalement. */
const props = defineProps<{ book: Book; selected: boolean }>();
defineEmits<{ select: [] }>();

const h = computed(() => hashString(props.book.title));
const width = computed(() => 84 + (h.value % 5) * 4); // 84 → 100 %
const offset = computed(() => ((h.value >> 3) % 5) * 2 - 4); // décalage -4 → +4 %
const tilt = computed(() => (((h.value >> 5) % 5) - 2) * 0.35); // -0.7° → +0.7°
const pattern = computed(() => (h.value >> 7) % 4);
const theme = computed(() => bookThemes[props.book.color] ?? bookThemes.blue);
</script>

<template>
  <button
    type="button"
    class="group relative flex min-h-[3.5rem] items-center gap-3 overflow-hidden border-2 border-ink py-2.5 pl-5 pr-4 text-left text-white transition-transform duration-300 ease-out hover:translate-x-3"
    :class="[theme.bg, props.selected && '!translate-x-6']"
    :style="{
      width: `${width}%`,
      marginLeft: `${Math.max(0, offset)}%`,
      rotate: `${tilt}deg`,
    }"
    :aria-pressed="props.selected"
    :aria-label="`${props.book.title}, ${props.book.author}`"
    @click="$emit('select')"
  >
    <!-- Ornements de tranche -->
    <span
      v-if="pattern === 0"
      class="absolute inset-y-0 left-2 w-2 bg-ink/60"
      aria-hidden="true"
    />
    <span
      v-else-if="pattern === 1"
      class="absolute inset-y-0 right-16 w-5 border-x-2 border-ink/50"
      aria-hidden="true"
    />
    <span
      v-else-if="pattern === 2"
      class="absolute inset-y-0 left-0 w-8 bg-[radial-gradient(circle,rgb(23_13_36/0.45)_1.5px,transparent_1.6px)] [background-size:7px_7px]"
      aria-hidden="true"
    />
    <span
      v-else
      class="absolute inset-x-0 top-1.5 h-1 bg-paper/40"
      aria-hidden="true"
    />

    <span
      class="relative min-w-0 flex-1 font-display text-xl font-black uppercase leading-[0.95] font-condensed md:text-[1.4rem]"
      >{{ props.book.title }}</span
    >
    <span
      class="relative shrink-0 font-mono text-[10px] font-semibold uppercase tracking-wider opacity-85"
      >{{ props.book.author.split(" ").slice(-1)[0] }}</span
    >
  </button>
</template>
