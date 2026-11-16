<script setup lang="ts">
useSeoMeta({ title: "Porte", ogTitle: "H2T.partage-club" });

const { openDoor, pending } = useOpenDoor();
</script>

<template>
  <div class="grid min-h-[70dvh] place-items-center">
    <div class="flex flex-col items-center text-center">
      <p class="eyebrow mb-10">.partage-club</p>

      <button
        type="button"
        class="group relative grid h-64 w-64 place-items-center rounded-full bg-brand-500 text-white shadow-[0_24px_60px_-12px_rgb(227_25_61/0.55)] transition-all duration-300 hover:scale-[1.03] hover:bg-brand-600 active:scale-95 disabled:cursor-wait md:h-72 md:w-72"
        :disabled="pending"
        :aria-busy="pending"
        @click="openDoor"
      >
        <span
          class="absolute inset-0 rounded-full ring-2 ring-brand-500/40"
          :class="pending ? 'animate-ping' : 'animate-pulse-ring'"
          aria-hidden="true"
        />
        <span class="flex flex-col items-center gap-3">
          <UiIcon name="door" :size="56" />
          <span class="font-display text-4xl font-extrabold tracking-tight">
            {{ pending ? "Ouverture…" : "Ouvrir" }}
          </span>
        </span>
      </button>

      <p class="mt-10 max-w-xs text-plum-500">
        Appuie sur le bouton pour déverrouiller la porte du club.
      </p>
    </div>
  </div>
</template>
