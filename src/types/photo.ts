export interface Photo {
    id: number
    originalURL: string
    previewURL: string
    aperture: number
    iso: number
    focalLength?: number
    lensName: string
}