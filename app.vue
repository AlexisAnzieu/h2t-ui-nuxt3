<template>
  <div class="flex">
    <!-- Burger Menu for Mobile -->
    <div v-if="$device.isMobile" class="burger-menu" @click="toggleNav">
      <div class="burger-bar"></div>
      <div class="burger-bar"></div>
      <div class="burger-bar"></div>
    </div>

    <!-- Left Navigation (Eggs) -->
    <div v-show="!$device.isMobile || isNavVisible" class="eggs">
      <div class="flex flex-col items-center">
        <div
          class="egg-cover"
          :class="{ active: $route.path === '/' }"
          @click="closeNav"
        >
          <router-link to="/">
            <div class="egg-title" :class="{ active: $route.path === '/' }">
              .accueil
            </div>
          </router-link>
          <div
            :style="`background-image: url('/images/nav/accueil.jpg')`"
            class="bg-image"
          ></div>
        </div>

        <div
          v-for="egg in eggs"
          :key="egg"
          class="egg-cover"
          :class="{ active: $route.path.startsWith(`/eggs/${egg}`) }"
          @click="closeNav"
        >
          <router-link
            v-if="egg !== 'market' && egg !== 'tech'"
            :to="`/eggs/${egg}`"
          >
            <div
              class="egg-title"
              :class="{ active: $route.path.startsWith(`/eggs/${egg}`) }"
            >
              .{{ egg }}
            </div>
          </router-link>

          <a
            v-if="egg === 'market'"
            target="_blank"
            href="https://www.partage.club/"
          >
            <div class="egg-title">.partage</div>
          </a>

          <a
            v-if="egg === 'tech'"
            target="_blank"
            href="https://tally.so/r/wd0XVo"
          >
            <div class="egg-title">.tech</div>
          </a>

          <div
            :style="`background-image: url('/images/nav/${egg}.jpg')`"
            class="bg-image"
          ></div>
        </div>
      </div>
    </div>

    <!-- Main Content Section -->
    <div class="section flex-1">
      <div>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const isNavVisible = ref(false);

    const toggleNav = () => {
      isNavVisible.value = !isNavVisible.value;
    };

    const eggs = computed(() => {
      const tabs = ["transition", "boiler", "talk", "teach", "market", "tech"];
      return tabs.sort();
    });

    return {
      eggs,
      route,
      isNavVisible,
      toggleNav,
    };
  },
};
</script>

<style>
html {
  font-family: montserrat, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.eggs {
  box-shadow: 2px 1px 5px 0px rgba(0, 0, 0, 0.75);
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  -webkit-overflow-scrolling: touch;
  text-align: center;
  transition: width 0.5s;
  background: rgba(6, 3, 51, 0.925);
  width: 50vw;
}

.egg-cover {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 15vh;
  transition: transform 0.1s;
  z-index: 0;
  position: relative;
}

.egg-cover:hover {
  transform: scale(1.15);
  z-index: 2;
  position: relative;
}

.egg-cover.active {
  transform: scale(1.2);
  z-index: 1;
  position: relative;
}

.egg-title {
  position: absolute;
  background: rgba(6, 3, 51, 0.87);
  width: 100%;
  height: 15vh;
  padding: 4vh;
  font-size: 55px;
  color: white !important;
}

.egg-title.active {
  background: rgba(51, 48, 3, 0.479);
}

.egg-title:hover {
  background: rgba(34, 32, 2, 0.699);
}

.bg-image {
  width: 100%;
  height: 15vh;
  background-size: cover;
}

.section {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  padding-left: 6px;
  transition: width 0.5s;
}

/* Burger Menu Styles */
.burger-menu {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
}

.burger-bar {
  width: 100%;
  height: 3px;
  background-color: rgb(4, 4, 4);
  transition: all 0.3s ease;
}

.burger-bar:hover {
  background-color: gray;
}
</style>
