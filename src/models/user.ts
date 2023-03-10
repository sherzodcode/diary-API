import { Page } from "@prisma/client";

export interface UserDto {
    username: string,
    email: string,
    password: number,
    page: Page[]
}

export interface updatedUser {
    username: string,
    email: string,
    password: number
}