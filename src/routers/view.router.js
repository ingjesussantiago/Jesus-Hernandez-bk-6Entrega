import { Router } from "express";

const router =Router()

router.get("/", (req,res)=>{
    res.send("desde ruter 6k")
})

export default router
