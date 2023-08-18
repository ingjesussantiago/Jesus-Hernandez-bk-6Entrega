import express from "express";
import __dirname from "./utils.js";
import viewRouter from "./routers/view.router.js";

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))







app.use("/", viewRouter)


app.listen(8080, () => {
    console.log(`server run on port: 8080`);
})