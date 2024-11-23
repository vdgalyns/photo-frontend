import axios from 'axios'
import type { Album, Photo } from '../types'

const client = axios.create({
    baseURL: 'https://api.photos.galynsky.ru'
})

async function getAlbums() {
    return await client.get<{ albums: Album[] }>('/albums').then(({ data }) => data.albums)
}

async function getAlbumPhotos(albumId: Album['id']) {
    return client.get<{ photos: Photo[] }>(`/albums/${albumId}/photos`).then(({ data }) => data.photos)
}

export default {
    getAlbums,
    getAlbumPhotos
}