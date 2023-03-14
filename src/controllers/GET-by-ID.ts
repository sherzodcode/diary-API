import {Request, Response } from 'express'
import { findPageById } from '@services/page.services'

export default async(req: Request, res: Response) => {
    try{
        const id = +req.params.id
    
        const page = await findPageById(id)

        if(!page){
            return res.status(500).json({
                message: "There's no page with this id"
            })
        }

        return res.status(200).json({
            message : "There u go",
            page
        })

    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error in get by id"
        })
    }
}