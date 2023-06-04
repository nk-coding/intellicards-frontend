<template>
  <v-app>
    <v-app-bar density="comfortable">
      <v-btn
        @click=""
        class="d-flex align-center py-5 px-0 full-opacity"
        to="/"
        variant="plain"
      >
        <img src="@/assets/ic-icon.png" width="40" />
        <span class="ml-3 text-h6"> IntelliCards </span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-btn icon @click="toggleDarkMode()">
        <v-icon>
          {{ lightMode ? "mdi-weather-sunny" : "mdi-weather-night" }}
        </v-icon>
        <v-tooltip activator="parent" location="bottom">
          Toggle light/dark mode
        </v-tooltip>
      </v-btn>
    </v-app-bar>
    <v-main class="mt-3 mx-3 pb-5">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import debounce from "lodash/debounce";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useTheme } from "vuetify/lib/framework.mjs";

const route = useRoute();

function setViewHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

onMounted(() => {
  setViewHeight();
  const debouncedSetHeight = debounce(setViewHeight, 50);
  window.addEventListener("resize", debouncedSetHeight);
});

const theme = useTheme();
const lightMode = ref(JSON.parse(localStorage.getItem("lightMode") ?? "true"));

function toggleDarkMode() {
  lightMode.value = !lightMode.value;
  localStorage.setItem("lightMode", JSON.stringify(lightMode.value));
  updateColorMode();
}

function updateColorMode() {
  theme.global.name.value = lightMode.value ? "light" : "dark";
}

updateColorMode();
</script>
<style>
html,
body {
  overflow-y: hidden !important;
}

.v-application__wrap {
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  max-height: 100vh;
  max-height: calc(var(--vh, 1vh) * 100);
}

.application {
  height: 100%;
}

main {
  height: calc(100%);
}
</style>
