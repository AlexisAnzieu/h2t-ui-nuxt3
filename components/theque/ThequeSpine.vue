<script setup lang="ts">
import { bookThemes, hashString, type Book } from "~/data/bookThemes";

/** Un livre vu par la tranche, sur l'étagère. */
const props = defineProps<{ book: Book; selected: boolean }>();
defineEmits<{ select: [] }>();

const h = computed(() => hashString(props.book.title));
const width = computed(() => 52 + (h.value % 5) * 6); // 52 → 76 px
const height = computed(() => 230 + ((h.value >> 3) % 6) * 12); // 230 → 290 px
const pattern = computed(() => (h.value >> 7) % 4);
const theme = computed(() => bookThemes[props.book.color] ?? bookThemes.blue);
const lastName = computed(() => props.book.author.split(" ").slice(-1)[0]);
</script>

<template>
  <div class="border-b-[12px] border-ink">
    <button
      type="button"
      class="relative flex flex-col items-center justify-between overflow-hidden border-2 border-b-0 border-ink px-1 pb-3 pt-4 text-white transition-transform duration-300 ease-out hover:-translate-y-3"
      :class="[theme.bg, props.selected && '!-translate-y-7']"
      :style="{ width: `${width}px`, height: `${height}px` }"
      :aria-pressed="props.selected"
      :aria-label="`${props.book.title}, ${props.book.author}`"
      @click="$emit('select')"
    >
      <!-- Ornements de tranche -->
      <span
        v-if="pattern === 0"
        class="absolute inset-x-0 top-2 h-2.5 bg-ink/70"
        aria-hidden="true"
      />
      <span
        v-else-if="pattern === 1"
        class="absolute inset-x-0 bottom-12 h-6 border-y-2 border-ink/60"
        aria-hidden="true"
      />
      <span
        v-else-if="pattern === 2"
        class="absolute inset-x-0 top-0 h-10 bg-[radial-gradient(circle,rgb(23_13_36/0.45)_1.5px,transparent_1.6px)] [background-size:7px_7px]"
        aria-hidden="true"
      />
      <span
        v-else
        class="absolute inset-y-0 left-1.5 w-1 bg-paper/40"
        aria-hidden="true"
      />

      <span
        class="relative max-h-[78%] overflow-hidden text-left font-display text-[19px] font-black uppercase leading-[0.95] font-condensed [writing-mode:vertical-rl] rotate-180"
        >{{ props.book.title }}</span
      >
      <span
        class="relative font-mono text-[10px] font-semibold uppercase tracking-wider opacity-85 [writing-mode:vertical-rl] rotate-180"
        >{{ lastName }}</span
      >
      <span
        v-if="props.selected"
        class="absolute -top-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1 rounded-full border-2 border-ink bg-sun"
        aria-hidden="true"
      />
    </button>
  </div>
</template>
