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
    class="group relative isolate flex h-[76px] items-end overflow-hidden rounded-xl px-4 pb-3 transition-all duration-300 focus-visible:ring-offset-plum-950"
    :class="isActive ? 'ring-1 ring-white/20' : 'hover:ring-1 hover:ring-white/10'"
  >
    <!-- Photo -->
    <img
      :src="props.item.image"
      alt=""
      loading="lazy"
      class="absolute inset-0 -z-20 h-full w-full object-cover transition-all duration-500"
      :class="
        isActive
          ? 'scale-105 grayscale-0'
          : 'scale-100 opacity-80 grayscale-[70%] group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0'
      "
    />
    <!-- Voile -->
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-r from-plum-950/90 via-plum-950/55 to-plum-950/0"
      aria-hidden="true"
    />
    <!-- Indicateur actif -->
    <span
      class="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-brand-500 transition-opacity duration-300"
      :class="isActive ? 'opacity-100' : 'opacity-0'"
      aria-hidden="true"
    />

    <div class="flex w-full items-end justify-between gap-2">
      <div class="min-w-0">
        <div
          class="font-display text-[22px] font-bold leading-none tracking-tight text-white"
        >
          <span class="text-brand-400">.</span>{{ props.item.label }}
        </div>
        <div class="mt-1 truncate font-mono text-[11px] text-white/60">
          {{ props.item.caption }}
        </div>
      </div>
      <UiIcon
        v-if="props.item.href"
        name="arrow-up-right"
        :size="16"
        class="mb-0.5 text-white/50 transition-colors group-hover:text-white"
      />
    </div>
  </NuxtLink>
</template>
