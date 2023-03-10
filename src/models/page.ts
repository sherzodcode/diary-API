import { User } from "@prisma/client";

export interface PageDto{
    date: number,
    title: string,
    author_id: number
}