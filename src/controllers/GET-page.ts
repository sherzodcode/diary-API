import {Request, Response} from 'express'
import { allPages } from '@services/page.services'

export default async(req: Request, res: Response) => {
    try{
        const Pages = await allPages()

        return res.status(200).json({
            message: "Retrived all pages",
            Pages
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error in Get"
        })
    }
}