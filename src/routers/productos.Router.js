import { Router } from "express"
import { managerProducto } from "../dao/manager/managerProducto.js"
import { uploader } from "../utils.js"
import { __dirname } from "../utils.js"

const router = Router()

const ManagerProducto = new managerProducto(__dirname + "/dao/db/productos.json")
router.get("/", async (req, res) => {
    const productos = await ManagerProducto.getProduct()
    res.render("home", { productos })
    // res.json({ productos })
})

router.post("/", uploader.single('file'), async (req, res) => {
    //  uploader.single("file")
    if (!req.file) {
        return res.status(400).send({ status: "error", mensaje: "no se adjunto archivo" })
    }
    console.log(req.file)

    const producto = req.body
    const productopaht = req.file.filename

    producto.thumbnails =  `/img/${productopaht}`
    

    const nuevoProducto = await ManagerProducto.addProduct(producto)
    // res.json({ message: "Producto creado", producto: nuevoProducto })
    res.redirect("/realTimeProductos")
})

router.get("/:idProducto", async (req, res) => {
    const { idProducto } = req.params
    const producto = await ManagerProducto.getProductoById(+idProducto)
    res.json({ producto })
})

router.delete("/", async (req, res) => {
    const message = await ManagerProducto.delateProduct()
    res.json({ message })
})

router.delete("/:idProducto", async (req, res) => {
    const { idProducto } = req.params
    const message = await ManagerProducto.delateProductById(+idProducto)
    res.json({ message })
})

router.put("/:idProducto", async (req, res) => {
    const { idProducto } = req.params
    const productoup = req.body
    const producto = await ManagerProducto.upDateProduc(+idProducto, productoup)
    res.json({ producto })
})




export default router