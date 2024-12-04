import Elysia, { t } from "elysia"

export const PhotoController = new Elysia({
    prefix: "api/photo",
    tags: ['Photo']
})
    .post('/', async ({ body: { imgFile } }) => {
        const filename = `${Date.now()}-${imgFile.name}`
        const filePath = `public/uploads/${filename}`
        const buffer = await imgFile.arrayBuffer()
        await Bun.write(filePath, buffer)

        return `https://localhost:8000/img/${filename}`
    }, {
        detail: { summary: "Upload photo" },
        body: t.Object({
            imgFile: t.File()
        })

    })