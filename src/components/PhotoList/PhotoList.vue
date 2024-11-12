<template>
  <div :class="classes.photoList">
    <PhotoListItem
        v-for="(photo, index) in photos"
        :key="photo.id"
        :photo="photo"
        @click="showFullscreen(index)"
    />

    <FullscreenPhotoViewer
        v-if="isFullscreen"
        :original-url="photos[currentPhotoIndex].originalURL"
        @next="showNextPhoto"
        @previous="showPreviousPhoto"
        @close="closeFullscreen"
    />
  </div>
</template>

<script setup lang="ts">
import type { Photo } from '../../types'
import PhotoListItem from './PhotoListItem.vue'
import { ref } from 'vue'
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

const showNextPhoto = () => {
  if (currentPhotoIndex.value === props.photos.length - 1) {
    return
  }
  currentPhotoIndex.value = currentPhotoIndex.value + 1
}
const showPreviousPhoto = () => {
  if (currentPhotoIndex.value === 0) {
    return
  }
  currentPhotoIndex.value = currentPhotoIndex.value - 1
}
</script>

<style module="classes">
.photoList {
  display: grid;
  grid-template-columns: repeat(6, max-content);
  gap: 8px;
}
</style>