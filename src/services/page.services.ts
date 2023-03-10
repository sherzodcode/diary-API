import { PrismaClient } from ".prisma/client";
import { PageDto } from "models/page";

const prisma = new PrismaClient()

export const addPage = async (dataPage: PageDto) => {
    return prisma.page.create({
        data: {
            date:       dataPage.date,
            title:      dataPage.title,
            info:       dataPage.info,
            author_id:  dataPage.author_id
        }
    })
}

export const allPages = async() => {
    return prisma.page.findMany()
}

export const findByTitle = async(title: string) => {
    return prisma.page.findFirst({
        where: {
            title
        }
    })
}

export const updatePage = async(dataPage: PageDto, id: number) => {
    return prisma.page.update({
        data: {
            date:       dataPage.date,
            title:      dataPage.title,
            info:       dataPage.info,
            author_id:  dataPage.author_id
        },where: {
            id
        }
    })
}

export const deletePage = async(id: number) => {
    return prisma.page.delete({
        where: {
            id
        }
    })
}