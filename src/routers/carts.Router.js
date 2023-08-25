import { Router } from "express"
// import {ManagerCart } from "../dao/manager/managerCart.js"
import ManagerCart from "../dao/mongoosedb/managerMongose/managerCartMongoose.js"
import { __dirname } from "../utils.js"

const router = Router()

//const managerCart = new ManagerCart(__dirname + "/dao/db/Carts.json")
const managerCart = new ManagerCart()

router.get("/", async (req, res) => {
    try {
        const carts = await managerCart.getCarts()
        res.json({ carts })
    } catch (error) {
        console.log(error);
    }
})



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

router.delete("/:idCart", async (req, res) => {
    try {
        const { idCart } = req.params
        const delatecart = await managerCart.delatecarrito(idCart)
        res.json({ delatecart })
    } catch (error) {

    }
})

router.post("/:idCar/products/:idProducto", async (req, res) => {
    try {
        const { idCart,idProducto } = req.params
        const { quantity } =res.body
        const encontrarCarrito = await managerCart.getCart(idCart,idProducto,quantity)
        res.json(encontrarCarrito)

    } catch (error) {

        
    }
})









export default router
