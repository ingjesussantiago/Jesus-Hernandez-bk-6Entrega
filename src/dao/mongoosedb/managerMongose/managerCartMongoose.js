import { cartModel } from "../models/cart.model.js";

export default class ManagerCart{

    getCarts = async()=>{
        try {
            const carts =await cartModel.find().lean();
            return carts

        } catch (error) {
            console.error('Error al traer los carritos:', err.message);
            return [];
        }

    }


  getCart = async(cartId)=>{
    try {
        const cart = await cartModel.findById(cartId)
        return cart;
    } catch (err) {
        console.error('Error al traer el carrito por ID:', err.message);
        return err;
    }
};

     crearCarrito = async(productos)=>{
        try {
            let cartData = {};
            if (productos && productos.length > 0) {
                cartData.productos = productos;
            }
    
            const cart = await cartModel.create(cartData);
            return cart;
        } catch (err) {
            console.error('Error al crear el carrito:', err.message);
            return err;
        }

        
    }    

}