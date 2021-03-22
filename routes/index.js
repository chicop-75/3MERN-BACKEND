import express from "express";

const router = express.Router()

router.get('/', ((req, res) => {
    try {
        res.status(200).json("Bienvenu sur l'API du Projet 3MERN")
    }catch (e) {
        console.log(e)
    }
}))

export default router
