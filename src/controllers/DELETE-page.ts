import {Request, Response } from 'express'
import { deletePage, findPageById } from '@services/page.services'

export default async(req: Request, res: Response) => {
    try{
        const id = +req.params.id

        const oldPage = await findPageById(id)

        if(!oldPage){
            return res.status(500).json({
                message: "There's no page with this id"
            })
        }

        const deletedPage = await deletePage(id)

        return res.status(200).json({
            message: "Page is deleted",
            deletedPage
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error in delete page"
        })
    }
}