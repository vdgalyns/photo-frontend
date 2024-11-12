import axios from 'axios'
import type { Album, Photo } from '../types'

const client = axios.create({
    baseURL: 'https://api.photos.galynsky.ru'
})

async function getAlbums() {
    return await client.get<Album[]>('/albums').then(({ data }) => data)
}

async function getAlbumPhotos(albumId: Album['id']) {
    return client.get<Photo[]>(`/albums/${albumId}/photos`).then(({ data }) => data)
}

export default {
    getAlbums,
    getAlbumPhotos
}