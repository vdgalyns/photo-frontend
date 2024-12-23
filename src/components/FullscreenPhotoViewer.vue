<template>
  <Teleport to="body">
    <div
        :class="classes.overlay"
        @click="onClose"
    >
      <Loader v-show="isLoading" />
      <img
          v-show="!isLoading"
          :class="classes.fullPhoto"
          :src="fullUrl"
          alt="original photo"
          @load="onImageLoad"
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type { Photo } from '../types'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import Loader from './Loader.vue'

const props = defineProps<Pick<Photo, 'fullUrl'> & {
  isLast: boolean
  isFirst: boolean
}>()
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'next'): void
  (e: 'previous'): void
}>()

const isLoading = ref(true)
const enableLoading = () => isLoading.value = true
const disableLoading = () => isLoading.value = false
const onImageLoad = () => disableLoading()
watch(() => props.fullUrl, () => {
  enableLoading()
})

const onClose = () => {
  emit('close')
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('close')
    return
  }

  if (event.key === 'ArrowLeft' && !props.isFirst) {
    emit('previous')
    return
  }

  if (event.key === 'ArrowRight' && !props.isLast) {
    emit('next')
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
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

.fullPhoto {
  max-height: 90%;
  max-width: 100%;
}
</style>