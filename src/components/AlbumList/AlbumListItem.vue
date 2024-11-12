<template>
  <div :class="[classes.albumListItem, active ? classes.active : '']" @click="onClick">
    {{ album.name }}
  </div>
</template>

<script setup lang="ts">
import type { Album } from '../../types'

defineProps<{
  album: Album
  active: boolean
}>()
const emit = defineEmits<{
  (e: 'click'): void
}>()

const onClick = () => {
  emit('click')
}
</script>

<style module="classes">
.albumListItem {
  padding: 4px 16px;
  border: 1px solid #212121;
  border-radius: 6px;
  cursor: pointer;
}

.albumListItem:hover {
  background: #f5f5f5;
}

.albumListItem.active {
  background: #212121;
  color: #ffffff;
}
</style>