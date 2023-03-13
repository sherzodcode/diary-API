import {Request, Response} from 'express'
import { addPage } from '@services/page.services'

export default async(req: Request, res: Response) => {
    try{
        const {date, title, context} = req.body

        const page = await addPage(date,title,context)

        if(page == null){
            return res.status(500).json({
                message: "Please complete your inputs"
            })
        }

        

        return res.status(200).json({
            message: "Done",
            page
        })

        
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error in posting page"
        })
    }
}