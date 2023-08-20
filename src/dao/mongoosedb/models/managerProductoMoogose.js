import  {productoModel} from "../models/producto.model.js"


export default class managerProducto {

    getProduct = async () => {
        try {
            const buscarproducts = await productoModel.find()
            const productos = JSON.parse(buscarproducts)
            return productos
        } catch (error) {
            console.log(error);
        }
    }

    addProduct =async(producto)=>{
        try {
            const nuevoProducto=await productoModel.create(producto)
            return nuevoProducto
            
        } catch (error) {
            console.log(error);
        }
    }
}


