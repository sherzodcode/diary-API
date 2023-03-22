import {Request , Response } from 'express'
import { findPageByDate } from '@services/page.services'

//// Date should be a string

export default async(req: Request, res: Response) => {
    try{
        const {date} = req.body

        if(date === null){
            return res.status(500).json({
                message: "Comlete your inputs"
            })
        }

        const page = await findPageByDate(date)

        if(!page){
            return res.status(500).json({
                message: "Wrong date"
            })
        }

        return res.status(200).json({
            message: "there you go",
            page
        })
    }catch(err){

    }
}
