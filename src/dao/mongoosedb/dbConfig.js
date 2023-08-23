import  mongoose  from "mongoose"

const URI = "mongodb+srv://ingjesussantiago:1BJqXKhkrqa9kOEM@cluster0.nwy2csb.mongodb.net/6Entregabk?retryWrites=true&w=majority"


mongoose.connect(URI)
.then(()=>console.log("conectado a db"))
.catch((error)=>console.log(error))
