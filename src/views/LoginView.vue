<template>
  <v-text-field label="username" v-model="username" variant="outlined"></v-text-field>
  <v-btn :disabled="username == ''" @click="store.username = username">Login</v-btn>
</template>
<script setup lang="ts">
import { useStore } from "@/store";
import { ref } from "vue";

const store = useStore();
const username = ref<string>("");
</script>
