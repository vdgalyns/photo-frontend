<template>
  <div :class="classes.albumList">
    <AlbumListItem
        v-for="album in albums"
        :key="album.id"
        :album="album"
        @click="onSelect(album.id)"
        :active="modelValue === album.id"
    />
  </div>
</template>

<script setup lang="ts">
import type { Album } from '../../types'
import AlbumListItem from './AlbumListItem.vue'

const modelValue = defineModel<Album['id']>()
defineProps<{ albums: Album[] }>()

const onSelect = (albumId: Album['id']) => {
  modelValue.value = albumId
}
</script>

<style module="classes">
.albumList {
  display: flex;
  column-gap: 8px;
}
</style>