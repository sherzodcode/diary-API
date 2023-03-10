import { PrismaClient } from ".prisma/client";
import { UserDto , updatedUser} from "models/user";


const prisma = new PrismaClient()

export const addUser = async (user_data: UserDto) => {
    return prisma.user.create({
        data: {
            username: user_data.username,
            email: user_data.username,
            password: user_data.password
        }
    })
}

export const findUsers = async () => {
    return prisma.user.findMany()
}

export const updateUser = async (id: number, updData: updatedUser) => {
    return prisma.user.update({
        where: {
            id
        },data: {
            username: updData.username,
            email: updData.email,
            password: updData.password
        }
    })
}

export const deleteUser = async(id: number) => {
    return prisma.user.delete({
        where: {
            id
        }
    })
}