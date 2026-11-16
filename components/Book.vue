<script setup lang="ts">
import { bookThemes, type BookTheme } from "~/data/bookThemes";

const props = withDefaults(
  defineProps<{
    title: string;
    author: string;
    summary: string;
    color?: BookTheme;
    link?: string;
    tags?: string[];
  }>(),
  { color: "blue", tags: () => [] }
);

const theme = computed(() => bookThemes[props.color] ?? bookThemes.blue);
const isFlipped = ref(false);

// Survol à la souris uniquement : au toucher, c'est le clic qui retourne le livre
const onPointer = (e: PointerEvent, value: boolean) => {
  if (e.pointerType === "mouse") isFlipped.value = value;
};
</script>

<template>
  <div
    class="group aspect-[3/4] w-full [perspective:1400px]"
    @pointerenter="onPointer($event, true)"
    @pointerleave="onPointer($event, false)"
  >
    <div
      class="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] [transform-style:preserve-3d]"
      :class="isFlipped && '[transform:rotateY(180deg)]'"
    >
      <!-- Couverture -->
      <button
        type="button"
        class="absolute inset-0 flex flex-col overflow-hidden rounded-r-xl rounded-l-sm text-left text-white shadow-lift [backface-visibility:hidden]"
        :class="theme.cover"
        :aria-expanded="isFlipped"
        :aria-label="`${props.title}, ${props.author}. Afficher le résumé`"
        :inert="isFlipped || undefined"
        @click="isFlipped = true"
      >
        <!-- Dos du livre -->
        <span
          class="absolute inset-y-0 left-0 w-3 bg-black/20 shadow-[inset_-2px_0_4px_rgb(0_0_0/0.15)]"
          aria-hidden="true"
        />
        <span class="flex h-full flex-col p-6 pl-8">
          <span class="flex items-center justify-between">
            <span class="font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
              {{ theme.label }}
            </span>
            <span class="h-2 w-2 rounded-full bg-white/70" aria-hidden="true" />
          </span>
          <span
            class="mt-auto text-balance font-display text-3xl font-extrabold leading-[1.05] tracking-tight"
          >
            {{ props.title }}
          </span>
          <span class="mt-3 text-white/80">{{ props.author }}</span>
          <span class="mt-6 h-px w-full bg-white/25" aria-hidden="true" />
          <span class="mt-4 flex flex-wrap gap-1.5">
            <span
              v-for="tag in props.tags.slice(0, 3)"
              :key="tag"
              class="rounded-full bg-white/15 px-2.5 py-0.5 text-xs text-white"
            >
              {{ tag }}
            </span>
          </span>
        </span>
      </button>

      <!-- Quatrième de couverture -->
      <div
        class="absolute inset-0 flex flex-col overflow-hidden rounded-l-xl rounded-r-sm bg-white p-6 shadow-lift ring-1 ring-paper-200 [backface-visibility:hidden] [transform:rotateY(180deg)]"
        :inert="!isFlipped || undefined"
      >
        <div class="flex items-center justify-between">
          <span class="eyebrow">Résumé</span>
          <button
            type="button"
            class="grid h-8 w-8 place-items-center rounded-full text-plum-500 transition-colors hover:bg-paper-100 hover:text-plum-900"
            aria-label="Revenir à la couverture"
            @click="isFlipped = false"
          >
            <UiIcon name="close" :size="16" />
          </button>
        </div>
        <p class="mt-1 font-display text-lg font-bold leading-tight">
          {{ props.title }}
        </p>
        <p class="mt-3 flex-1 overflow-y-auto text-[15px] leading-relaxed text-plum-600">
          {{ props.summary }}
        </p>
        <div class="mt-4 flex flex-wrap gap-1.5">
          <UiBadge v-for="tag in props.tags" :key="tag">{{ tag }}</UiBadge>
        </div>
        <UiButton
          v-if="props.link"
          :href="props.link"
          new-tab
          variant="dark"
          size="sm"
          icon="arrow-up-right"
          class="mt-5 w-full"
        >
          Se procurer le livre
        </UiButton>
      </div>
    </div>
  </div>
</template>
