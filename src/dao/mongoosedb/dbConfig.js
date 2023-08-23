import  mongoose  from "mongoose"

<<<<<<< HEAD
const URI = "mongodb+srv://ingjesussantiago:1BJqXKhkrqa9kOEM@cluster0.nwy2csb.mongodb.net/6Entregabk?retryWrites=true&w=majority"

=======
// const URI = "mongodb+srv://ingjesussantiago:1BJqXKhkrqa9kOEM@cluster0.nwy2csb.mongodb.net/6entregabk?retryWrites=true&w=majority"
const URI ="mongodb+srv://ingjesussantiago:1BJqXKhkrqa9kOEM@cluster0.nwy2csb.mongodb.net/6Entregabk?retryWrites=true&w=majority"
>>>>>>> moogose1

mongoose.connect(URI)
.then(()=>console.log("conectado a db"))
.catch((error)=>console.log(error))
