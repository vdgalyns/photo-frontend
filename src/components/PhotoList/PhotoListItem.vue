<template>
  <div :class="classes.photoListItem">
    <img
        :class="classes.previewPhoto"
        :src="photo.previewUrl"
        alt="preview photo"
        @click="onClick"
    />
  </div>
</template>

<script setup lang="ts">
import type { Photo } from '../../types'

defineProps<{ photo: Photo }>()
const emit = defineEmits<{
  (e: 'click'): void
}>()

const onClick = () => emit('click')
</script>

<style module="classes">
.photoListItem {
  width: 128px;
  height: 128px;
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
}
.photoListItem:hover .previewPhoto {
  filter: brightness(70%);
}
.previewPhoto {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>