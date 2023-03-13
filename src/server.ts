import { ACCESS_TOKEN, PORT } from 'config'
import express from 'express'
import cors from 'cors'

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use((req,res,next) => {

    const token = req.header('x-access-token')

    if(!token || token != ACCESS_TOKEN){
        return res.status(500).send("Access denied")
    }

    next()
})




app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})