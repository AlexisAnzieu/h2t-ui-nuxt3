<script setup lang="ts">
useSeoMeta({ title: "Porte", ogTitle: "H2T.partage-club" });

const { openDoor, pending } = useOpenDoor();
</script>

<template>
  <div class="grid min-h-[75dvh] place-items-center py-10">
    <div class="flex flex-col items-center text-center">
      <p
        class="mb-10 border-2 border-ink bg-paper-50 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.18em]"
      >
        .partage-club ✺ Accès membres
      </p>

      <button
        type="button"
        class="group relative grid size-[19rem] place-items-center disabled:cursor-wait md:size-[26rem]"
        :disabled="pending"
        :aria-busy="pending"
        aria-label="Ouvrir la porte"
        @click="openDoor"
      >
        <!-- Texte qui tourne autour -->
        <svg
          class="absolute inset-0 h-full w-full animate-spin-slow"
          :class="pending && '[animation-duration:3s]'"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <defs>
            <path
              id="door-ring"
              d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0"
            />
          </defs>
          <text
            class="fill-ink font-mono text-[10.5px] font-semibold uppercase tracking-[0.25em]"
          >
            <textPath href="#door-ring" textLength="548" lengthAdjust="spacing">
              Ouvrir la porte ✺ Ouvrir la porte ✺ Ouvrir la porte ✺
            </textPath>
          </text>
        </svg>

        <span
          class="grid size-[13.5rem] place-items-center rounded-full border-2 border-ink bg-brand text-white shadow-hard-lg transition-[transform,box-shadow] duration-150 group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-1 group-active:translate-y-1 group-active:shadow-none md:size-[19rem]"
        >
          <span class="flex flex-col items-center">
            <span
              class="font-display text-7xl font-black uppercase leading-[0.8] font-condensed riso-violet md:text-8xl"
            >
              {{ pending ? "…" : "Porte" }}
            </span>
            <span class="mt-3 font-mono text-xs font-semibold uppercase tracking-[0.2em]">
              {{ pending ? "Ouverture" : "Appuie ici" }}
            </span>
          </span>
        </span>
      </button>
    </div>
  </div>
</template>
