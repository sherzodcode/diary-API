import {Request, Response} from 'express'
import { updatePage , findPageById} from '@services/page.services'

export default async(req: Request, res: Response) => {
    try{
        const id = +req.params.id
        const {date, title, context} = req.body

        const oldPage = await findPageById(id)

        if(!oldPage){
            return res.status(500).json({
                message: "There's no page wiht this id"
            })
        }

        const page = {
            date,
            title,
            context
        }

        const updatedPage = await updatePage(page,id)

        if(updatePage == null || updatePage == undefined){
            return res.status(500).json({
                message: "Complete ur inputs"
            }
            )
        }

        return res.status(200).json({
            message: "Page is updated",
            updatedPage
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Something happened in Update"
        })
    }
}