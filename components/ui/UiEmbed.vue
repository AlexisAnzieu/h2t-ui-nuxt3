<script setup lang="ts">
/**
 * Lecteur intégré (YouTube, SoundCloud, Spotify…) avec un fond de chargement
 * et un ratio stable pour éviter les sauts de mise en page.
 */
const props = withDefaults(
  defineProps<{
    src: string;
    title: string;
    /** "video" = 16:9 ; sinon hauteur fixe en px */
    height?: "video" | number;
  }>(),
  { height: "video" }
);
</script>

<template>
  <div
    class="relative w-full overflow-hidden rounded-xl bg-plum-100"
    :class="props.height === 'video' && 'aspect-video'"
    :style="props.height !== 'video' ? { height: `${props.height}px` } : undefined"
  >
    <iframe
      :src="props.src"
      :title="props.title"
      class="absolute inset-0 h-full w-full"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>
