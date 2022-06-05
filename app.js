const express = require('express')
const app = express()
const mongoose = require('mongoose')
const subscriberRoutes = require('./routes/subscriberRoutes')

//DB CONFIG
const DB_USER = "#######"
const DB_PASSWORD = "######"


mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.wrtpp3n.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log("Banco conectado.")
    app.listen(3000)
})

.catch((err) => console.log(err))


//Middlewares_ Leitura JSON
app.use(express.urlencoded({
    extended: true,
}),)
app.use(express.json())



app.use('/subscription', subscriberRoutes)



//apenas teste da rota principal
app.get("/", (req, res) => {
    res.json({message: "api go brrrr"})
})
