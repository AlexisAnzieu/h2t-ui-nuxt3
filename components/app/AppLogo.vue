<template>
  <NuxtLink
    to="/"
    class="group inline-flex items-center gap-3"
    aria-label="H2T.club, retour à l'accueil"
  >
    <span
      class="grid h-10 w-10 place-items-center rounded-lg bg-brand-500 transition-transform duration-300 group-hover:-rotate-6"
      aria-hidden="true"
    >
      <span
        class="flex h-7 w-4 flex-col items-center justify-center border-[1.5px] border-plum-700 font-display text-[9px] font-bold leading-[1.05] text-white"
      >
        <span>H</span><span>2</span><span>T</span>
      </span>
    </span>
    <span class="font-display text-xl font-extrabold tracking-tight text-white">
      H2T<span class="text-brand-400">.club</span>
    </span>
  </NuxtLink>
</template>
