import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    title:{
        type:String
    },
    descripcion:{
        type:String
    },
    code:{
        type:Number
    },
    price:{
        type:Number
    },
    status:{
        type:Boolean
    },
    category:{
        type:String
<<<<<<< HEAD
=======
    },
    stock:{
        type:String
>>>>>>> moogose1
    }

});

export const productoModel =mongoose.model("productos",productoSchema)