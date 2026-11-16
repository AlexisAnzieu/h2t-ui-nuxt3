<script setup lang="ts">
const isNavOpen = ref(false);
const route = useRoute();

watch(
  () => route.fullPath,
  () => (isNavOpen.value = false)
);

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape") isNavOpen.value = false;
};

onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown));

useHead({
  bodyAttrs: {
    class: computed(() =>
      isNavOpen.value ? "overflow-hidden lg:overflow-auto" : ""
    ),
  },
});
</script>

<template>
  <div class="min-h-dvh">
    <!-- Sidebar desktop -->
    <aside
      class="fixed inset-y-0 left-0 z-30 hidden w-[19rem] border-r-2 border-ink lg:block"
    >
      <AppSidebar />
    </aside>

    <!-- Barre mobile -->
    <header
      class="on-dark sticky top-0 z-30 flex h-16 items-center justify-between border-b-2 border-ink bg-brand px-4 lg:hidden"
    >
      <AppLogo size="sm" />
      <button
        type="button"
        class="border-2 border-white px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-brand"
        :aria-expanded="isNavOpen"
        aria-controls="mobile-nav"
        @click="isNavOpen = true"
      >
        Menu
      </button>
    </header>

    <!-- Tiroir mobile -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      leave-active-class="transition-transform duration-200 ease-in"
      enter-from-class="-translate-x-full"
      leave-to-class="-translate-x-full"
    >
      <aside
        v-if="isNavOpen"
        id="mobile-nav"
        class="fixed inset-0 z-50 border-r-2 border-ink sm:w-[22rem] lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <AppSidebar />
        <button
          type="button"
          class="absolute right-4 top-6 border-2 border-white px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-brand"
          @click="isNavOpen = false"
        >
          Fermer ✕
        </button>
      </aside>
    </Transition>
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isNavOpen"
        class="fixed inset-0 z-40 hidden bg-ink/50 sm:block lg:hidden"
        aria-hidden="true"
        @click="isNavOpen = false"
      />
    </Transition>

    <!-- Contenu -->
    <main class="overflow-x-clip lg:pl-[19rem]">
      <div class="mx-auto w-full max-w-6xl px-5 pb-4 pt-10 sm:px-8 md:pt-14 lg:px-12">
        <slot />
      </div>
      <AppFooter />
    </main>
  </div>
</template>
