<script setup lang="ts">
/**
 * Fenêtre modale basée sur <dialog> : focus piégé, Échap et
 * couche supérieure gérés nativement par le navigateur.
 */
const open = defineModel<boolean>("open", { default: false });
const props = defineProps<{ label: string }>();

const dialog = ref<HTMLDialogElement>();

watch(open, (value) => {
  const el = dialog.value;
  if (!el) return;
  if (value && !el.open) el.showModal();
  if (!value && el.open) el.close();
});

// Fermeture native (Échap) → on synchronise l'état
const onClose = () => (open.value = false);

// Clic sur le fond (en dehors du panneau)
const onClick = (e: MouseEvent) => {
  if (e.target === dialog.value) open.value = false;
};

useHead({
  bodyAttrs: { class: computed(() => (open.value ? "overflow-hidden" : "")) },
});
</script>

<template>
  <dialog
    ref="dialog"
    :aria-label="props.label"
    class="m-auto max-h-[92dvh] w-[min(56rem,calc(100vw-2rem))] overflow-visible bg-transparent p-0 text-ink backdrop:bg-ink/70 backdrop:backdrop-blur-[2px]"
    @close="onClose"
    @click="onClick"
  >
    <div v-if="open" class="relative max-h-[92dvh] animate-pop overflow-y-auto">
      <slot />
      <button
        type="button"
        class="absolute right-3 top-3 z-10 border-2 border-ink bg-paper-50 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] shadow-hard transition-transform hover:-translate-y-0.5 hover:bg-sun active:translate-y-0.5 active:shadow-none"
        @click="open = false"
      >
        Fermer ✕
      </button>
    </div>
  </dialog>
</template>
