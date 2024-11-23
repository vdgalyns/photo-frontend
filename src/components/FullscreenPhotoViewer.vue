<template>
  <Teleport to="body">
    <div
        :class="classes.overlay"
        @click="onClose"
    >
      <img
          :class="classes.originalPhoto"
          :src="originalURL"
          alt="original photo"
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type { Photo } from '../types'
import { onMounted, onUnmounted } from 'vue'

defineProps<Pick<Photo, 'originalURL'>>()
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'next'): void
  (e: 'previous'): void
}>()

const onClose = () => {
  emit('close')
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowLeft') {
    emit('previous')
    return
  }

  if (event.key === 'ArrowRight') {
    emit('next')
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style module="classes">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
.originalPhoto {
  max-height: 90%;
  max-width: 100%;
}
</style>