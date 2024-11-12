<template>
  <Header />

  <div :class="classes.albums">
    <AlbumList v-model="selectedAlbumID" :albums="albums" />
  </div>

  <div :class="classes.photos">
    <PhotoList :photos="photos" />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import AlbumList from './components/AlbumList/AlbumList.vue'
import PhotoList from './components/PhotoList/PhotoList.vue'
import type { Album, Photo } from './types'
import { onMounted, ref, watch } from 'vue'
import api from './api'

const albums = ref<Album[]>([])
const selectedAlbumID = ref<Album['id']>()
const photos = ref<Photo[]>([])

async function getAlbums() {
  const data = await api.getAlbums()
  if (!data.length) {
    return
  }
  albums.value = data
  selectedAlbumID.value = data[0].id
}
async function getAlbumPhotos(albumId: Album['id']) {
  if (photos.value.length) {
    photos.value = []
  }
  const data = await api.getAlbumPhotos(albumId)
  if (!data.length) {
    return
  }
  photos.value = data
}

watch(() => selectedAlbumID.value, (albumId) => {
  if (!albumId) {
    return
  }
  getAlbumPhotos(albumId)
})

onMounted(() => {
  getAlbums()
})
</script>/

<style module="classes">
.albums {
  margin: 8px 0;
}
.photos {
  margin: 8px 0 0 0;
}
</style>
