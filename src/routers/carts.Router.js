import { Router } from "express"
// import {ManagerCart } from "../dao/manager/managerCart.js"
import ManagerCart from "../dao/mongoosedb/managerMongose/managerCartMongoose.js"
import { __dirname } from "../utils.js"

const router = Router()

//const managerCart = new ManagerCart(__dirname + "/dao/db/Carts.json")
const managerCart = new ManagerCart()







router.get("/:idCart", async (req, res) => {
    try {
        const { idCart } = req.params
        const cart = await managerCart.getCart(idCart)
        res.json({ cart })

    } catch (error) {
        console.log(error);
    }

})

router.post("/", async (req, res) => {
    try {
        const newCart = await managerCart.crearCarrito()
        res.json({ cart: newCart })

    } catch (error) {
        console.log(error);
    }

    
})




export default router
