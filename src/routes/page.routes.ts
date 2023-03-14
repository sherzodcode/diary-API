import { Router } from "express";
import POSTPage from "@controllers/POST-page";
import GETPage from "@controllers/GET-page";
import PUTPage from "@controllers/PUT-page";
import DELETEPage from "@controllers/DELETE-page";
import GETByID from "@controllers/GET-by-ID";

const router = Router()

router.get('/pages', GETPage )
router.get('/pages/:id', GETByID )

router.post('/pages', POSTPage)
router.put('/pages/:id', PUTPage),
router.delete('/pages/:id', DELETEPage)




export default router