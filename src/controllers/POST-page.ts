import {Request, Response} from 'express'
import { addPage } from '@services/page.services'

export default async(req: Request, res: Response) => {
    try{
        const {date, title, context} = req.body

        
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error in posting page"
        })
    }
}