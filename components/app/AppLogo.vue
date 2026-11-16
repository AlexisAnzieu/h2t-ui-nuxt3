<script setup lang="ts">
/** Reprise du logo H2T.club : H/2/T empilés dans un cadre violet. */
const props = withDefaults(defineProps<{ size?: "sm" | "md" }>(), {
  size: "md",
});
</script>

<template>
  <NuxtLink
    to="/"
    class="group inline-flex items-end gap-2.5 text-white"
    aria-label="H2T.club, retour à l'accueil"
  >
    <span
      class="flex flex-col items-center border-violet-700 font-display font-semibold leading-[0.92] transition-transform duration-300 group-hover:-rotate-3"
      :class="
        props.size === 'md'
          ? 'border-[3px] px-1.5 py-1 text-[26px]'
          : 'border-2 px-1 py-0.5 text-[15px]'
      "
      aria-hidden="true"
    >
      <span>H</span><span>2</span><span>T</span>
    </span>
    <span class="flex flex-col items-end" aria-hidden="true">
      <span
        class="font-display font-black uppercase leading-none font-expanded"
        :class="props.size === 'md' ? 'text-2xl' : 'text-base'"
        >.club</span
      >
      <span
        class="mt-1.5 block bg-violet-700"
        :class="props.size === 'md' ? 'h-[3px] w-10' : 'h-0.5 w-6'"
      />
    </span>
  </NuxtLink>
</template>
