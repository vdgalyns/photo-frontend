import axios from 'axios'
import type { Album, Photo } from '../types'

const client = axios.create({
    baseURL: 'https://api.photo.galynsky.ru',
})

async function getAlbums() {
    return await client.get<Album[]>('/albums.json').then(({ data }) => data)
}

async function getAlbumPhotos(albumId: Album['id']) {
    return client.get<Photo[]>(`/${albumId}/photos.json`).then(({ data }) => data)
}

export default {
    getAlbums,
    getAlbumPhotos
}