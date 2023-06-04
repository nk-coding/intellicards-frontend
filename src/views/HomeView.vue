<template>
  <div class="fullscreen d-flex flex-column">
    <div class="d-flex align-center mb-4">
      <v-text-field
        v-model="search"
        label="Search"
        variant="outlined"
        density="compact"
        hide-details
        class="mr-3"
      ></v-text-field>
      <v-dialog v-model="createMaterialDialog">
        <template v-slot:activator="{ props }">
          <v-btn icon variant="tonal" v-bind="props">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card class="px-3">
          <v-card-title> Create Material </v-card-title>
          <v-text-field
            label="Title"
            v-model="materialTitle"
            variant="outlined"
            density="comfortable"
            class="mt-3"
          ></v-text-field>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" variant="text" @click="closeMaterialDialog">
              Cancel
            </v-btn>
            <v-btn
              color="success"
              variant="text"
              @click="createMaterial"
              :disabled="materialTitle === ''"
            >
              Create
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div style="overflow: auto; flex: 1 1 auto">
      <v-expansion-panels class="materials" multiple v-model="expanded">
        <v-expansion-panel
          v-for="(material, idx) in materials"
          :key="idx"
          :value="material.id"
        >
          <v-expansion-panel-title>
            {{ material.title }}
            <v-spacer></v-spacer>
            <div @click.stop="" v-if="expanded.includes(material.id)">
              <v-dialog v-model="createChapterDialog">
                <template v-slot:activator="{ props }">
                  <v-btn class="mr-2" variant="text" icon density="comfortable" v-bind="props">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <v-card class="px-3">
                  <v-card-title> Create Chapter </v-card-title>
                  <v-text-field
                    label="Title"
                    v-model="chapterTitle"
                    variant="outlined"
                    density="comfortable"
                    class="mt-3"
                  ></v-text-field>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="error"
                      variant="text"
                      @click="closeChapterDialog"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="success"
                      variant="text"
                      @click="createChapter(material.id)"
                      :disabled="chapterTitle === ''"
                    >
                      Create
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-expansion-panel-title>
          <v-expansion-panel-text v-show="material.chapters.nodes.length > 0">
            <v-list-item
              v-for="(chapter, idx) in material.chapters.nodes"
              :key="idx"
              class="px-3 py-2 ma-1"
              @click="onChapterClick(chapter.id)"
            >
              {{ chapter.title }}
            </v-list-item>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getClient } from "@/graphql/client";
import { Material } from "@/graphql/generated";
import { ref } from "vue";
import { useRouter } from "vue-router";

const client = getClient();
const router = useRouter();

const materials = ref<Material[]>([]);
const expanded = ref<string[]>([]);
const search = ref("");

const createMaterialDialog = ref<any>(false);
const materialTitle = ref("");

function closeMaterialDialog() {
  createMaterialDialog.value = false;
  materialTitle.value = "";
}

async function createMaterial() {
  await client.createMaterial({ title: materialTitle.value });
  closeMaterialDialog();
  await updateMaterials();
}

const createChapterDialog = ref<any>(false);
const chapterTitle = ref("");

function closeChapterDialog() {
  createChapterDialog.value = false;
  chapterTitle.value = "";
}

async function createChapter(material: string) {
  await client.createChapter({
    title: chapterTitle.value,
    material: material,
  });
  closeChapterDialog();
  await updateMaterials();
}

updateMaterials();

async function updateMaterials() {
  const newMaterials = (await client.getMaterials()).user.materials
    .nodes as Material[];
  materials.value = newMaterials;
}

function onChapterClick(chapter: any) {
  router.push(`/chapter/${chapter}`);
}
</script>
<style scoped>
.fullscreen {
  height: 100%;
  width: 100%;
}
</style>
<style>
.materials .v-expansion-panel-text__wrapper {
  padding: 0 !important;
}
</style>
