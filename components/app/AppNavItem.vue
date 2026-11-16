<script setup lang="ts">
import type { NavItem } from "~/data/navigation";

const props = defineProps<{ item: NavItem }>();

const route = useRoute();
const isActive = computed(() => {
  const to = props.item.to;
  if (!to) return false;
  return to === "/" ? route.path === "/" : route.path.startsWith(to);
});
</script>

<template>
  <NuxtLink
    :to="props.item.to ?? props.item.href"
    :target="props.item.href ? '_blank' : undefined"
    :aria-current="isActive ? 'page' : undefined"
    class="group relative isolate flex items-center gap-3 overflow-hidden border-t-2 border-ink/20 px-5 py-2.5 text-white transition-colors duration-200"
    :class="isActive ? 'bg-ink' : 'hover:bg-violet-900'"
  >
    <!-- Photo fantôme -->
    <img
      :src="props.item.image"
      alt=""
      loading="lazy"
      class="absolute inset-0 -z-10 h-full w-full object-cover mix-blend-screen grayscale transition-opacity duration-300"
      :class="isActive ? 'opacity-25' : 'opacity-0 group-hover:opacity-35'"
    />

    <span class="w-5 self-start pt-1.5 font-mono text-[11px] font-medium opacity-70">
      {{ props.item.number }}
    </span>

    <span class="min-w-0 flex-1">
      <span
        class="block font-display text-[2.35rem] font-black uppercase leading-[0.85] font-condensed transition-transform duration-300 group-hover:translate-x-1.5"
        :class="isActive && 'text-sun'"
        >.{{ props.item.label }}</span
      >
      <span
        class="mt-1 block truncate font-mono text-[10.5px] font-medium uppercase tracking-[0.12em] opacity-75"
        >{{ props.item.caption }}</span
      >
    </span>

    <span
      v-if="isActive"
      class="h-3 w-3 shrink-0 rounded-full bg-sun"
      aria-hidden="true"
    />
    <UiIcon
      v-else-if="props.item.href"
      name="arrow-up-right"
      :size="20"
      class="shrink-0 opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
    />
  </NuxtLink>
</template>
