<template>
  <div class="fullscreen">
    <div>
      <div class="d-flex align-center">
        <div class="text-h6">
          {{ chapter?.title ?? "Loading..." }}
        </div>
        <v-spacer></v-spacer>
        <v-btn icon variant="tonal" @click="fileInput!.click()">
          <v-icon>mdi-upload</v-icon>
        </v-btn>
        <input
          ref="fileInput"
          type="file"
          style="display: none"
          accept="image/*"
          @change="handleFileChange"
        />
      </div>
    </div>
    <div class="tinder-wrapper">
      <Tinder
        ref="tinder"
        key-name="id"
        v-model:queue="queue"
        :offset-y="10"
        @submit="onSubmit"
        :allowSuper="false"
        :allowDown="false"
      >
        <template v-slot="scope">
          <v-card class="pa-3 card-wrapper" elevation="24" rounded="xl" @click="scope.data.revealed = true">
            <div class="discover-card">
              <div class="text-center text-h6">
                {{ scope.data.question }}
              </div>
              <div class="text-center text-body-1 mt-3" v-if="scope.data.revealed">
                {{ scope.data.answer }}
              </div>
            </div>
          </v-card>
        </template>
        <template v-slot:like>
          <v-icon class="like-pointer" size="x-large" color="success"
            >mdi-thumb-up</v-icon
          >
        </template>
        <template v-slot:nope>
          <v-icon class="dislike-pointer" size="x-large" color="error"
            >mdi-thumb-down</v-icon
          >
        </template>
      </Tinder>
      <div class="buttons">
        <v-btn
          size="large"
          icon="mdi-undo"
          class="ma-5"
          color="warning"
          @click="undo()"
          :disabled="history.length === 0"
        />
        <v-btn
          size="large"
          icon="mdi-thumb-down"
          class="ma-5"
          color="error"
          @click="tinder.decide('nope')"
        />
        <v-btn
          size="large"
          icon="mdi-thumb-up"
          class="ma-5"
          color="success"
          @click="tinder.decide('like')"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getClient } from "@/graphql/client";
import { Chapter } from "@/graphql/generated";
import { onMounted } from "vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
// @ts-ignore
import Tinder from "vue-tinder";
import "vue-tinder/lib/style.css";

const client = getClient();

const route = useRoute();
const chapter = ref<Chapter | null>(null);
const tinder = ref<any>(null);

watch(
  () => route.params.chapterId,
  async () => {
    await reloadChapter();
  }
);

onMounted(async () => {
  await reloadChapter();
});

async function reloadChapter() {
  const chapterId = route.params.chapter as string;
  const newChapter = (await client.getChapter({ id: chapterId })).node as Chapter;
  chapter.value = newChapter;
  queue.value = newChapter.flashcards.nodes.map((card) => ({...card, revealed: false}));
}

const fileInput = ref<any>(null);

async function handleFileChange(event: any) {
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post("/api/file/test", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Upload response:", response.data);
  } catch (error) {
    console.error("Upload failed:", error);
  }
}

const queue = ref<any[]>([]);
const history: any[] = [];

function onSubmit(item: any) {
  const decision = item.type;
  item.item.revealed = false
  history.push(item.item);
}

function undo() {
  if (history.length) {
    tinder.value.rewind([history.pop()]);
  }
}
</script>
<style scoped>
body {
  margin: 0;
  background-color: #20262e;
  overflow: hidden;
}

.vue-tinder {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 40px;
  margin: auto;
  width: calc(100% - 80px);
  height: calc(100% - 160px);
}

.dislike-pointer,
.like-pointer {
  position: absolute;
  z-index: 1;
  top: 30px;
  width: 64;
  height: 64;
}

.dislike-pointer {
  right: 30px;
}

.like-pointer {
  left: 30px;
}

.discover-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-wrapper {
  height: 100%;
  width: 100%;
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100%;
}

.tinder-wrapper {
  position: relative;
  width: 100%;
  flex: 1 1 auto;
}

.fullscreen {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
<style>
.tinder-card {
  background: none !important;
  box-shadow: none !important;
  overflow: visible !important;
}
</style>
