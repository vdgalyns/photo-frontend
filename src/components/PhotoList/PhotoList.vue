<template>
  <div :class="classes.photoList">
    <PhotoListItem
        v-for="(photo, index) in photos"
        :key="index"
        :photo="photo"
        @click="showFullscreen(index)"
    />

    <FullscreenPhotoViewer
        v-if="isFullscreen"
        :full-url="photos[currentPhotoIndex].fullUrl"
        :is-first="isFirstPhoto"
        :is-last="isLastPhoto"
        @next="showNextPhoto"
        @previous="showPreviousPhoto"
        @close="closeFullscreen"
    />
  </div>
</template>

<script setup lang="ts">
import type { Photo } from '../../types'
import PhotoListItem from './PhotoListItem.vue'
import {computed, ref} from 'vue'
import FullscreenPhotoViewer from '../FullscreenPhotoViewer.vue'

const props = defineProps<{ photos: Photo[] }>()

const isFullscreen = ref(false)
const currentPhotoIndex = ref(0)

const showFullscreen = (index: number) => {
  currentPhotoIndex.value = index
  isFullscreen.value = true
}
const closeFullscreen = () => {
  isFullscreen.value = false
}

const isFirstPhoto = computed(() => currentPhotoIndex.value === 0)
const isLastPhoto = computed(() => currentPhotoIndex.value === props.photos.length - 1)

const showNextPhoto = () => {
  if (isLastPhoto.value) {
    return
  }
  currentPhotoIndex.value = currentPhotoIndex.value + 1
}
const showPreviousPhoto = () => {
  if (isFirstPhoto.value) {
    return
  }
  currentPhotoIndex.value = currentPhotoIndex.value - 1
}
</script>

<style module="classes">
.photoList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
  gap: 8px;
}

@media screen and (max-width: 768px) {
  .photoList {
    grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
  }
}
</style>