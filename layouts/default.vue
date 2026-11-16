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
    class: computed(() => (isNavOpen.value ? "overflow-hidden lg:overflow-auto" : "")),
  },
});
</script>

<template>
  <div class="min-h-dvh">
    <!-- Sidebar desktop -->
    <aside class="fixed inset-y-0 left-0 z-30 hidden w-72 lg:block">
      <AppSidebar />
    </aside>

    <!-- Barre mobile -->
    <header
      class="sticky top-0 z-30 flex h-16 items-center justify-between bg-plum-950/95 px-4 backdrop-blur lg:hidden"
    >
      <AppLogo />
      <button
        type="button"
        class="grid h-10 w-10 place-items-center rounded-full text-white transition-colors hover:bg-white/10"
        :aria-expanded="isNavOpen"
        aria-controls="mobile-nav"
        aria-label="Ouvrir le menu"
        @click="isNavOpen = true"
      >
        <UiIcon name="menu" :size="22" />
      </button>
    </header>

    <!-- Tiroir mobile -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isNavOpen"
        class="fixed inset-0 z-40 bg-plum-950/60 backdrop-blur-sm lg:hidden"
        aria-hidden="true"
        @click="isNavOpen = false"
      />
    </Transition>
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      leave-active-class="transition-transform duration-200 ease-in"
      enter-from-class="-translate-x-full"
      leave-to-class="-translate-x-full"
    >
      <aside
        v-if="isNavOpen"
        id="mobile-nav"
        class="fixed inset-y-0 left-0 z-50 w-[min(20rem,88vw)] shadow-2xl lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <AppSidebar />
        <button
          type="button"
          class="absolute right-3 top-5 grid h-10 w-10 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Fermer le menu"
          @click="isNavOpen = false"
        >
          <UiIcon name="close" :size="22" />
        </button>
      </aside>
    </Transition>

    <!-- Contenu -->
    <main class="lg:pl-72">
      <div class="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 md:py-16 lg:px-12">
        <slot />
      </div>
    </main>
  </div>
</template>
