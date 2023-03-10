import { User } from "@prisma/client";

export interface PageDto{
    date: string,
    title: string,
    info: string,
    author_id: number
}