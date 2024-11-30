import express from 'express';
import { initModels } from './model/init-models';
import { sequelize } from './database/sequelize';
import productRoutes from "./routes/product-routes"


const PORT = process.env.PORT || 3001

const app = express()

// app.use(cors())
// app.use(express.json())

initModels(sequelize)

// routes
app.use('/', productRoutes)


app.listen(PORT,()=>{
    console.log('hello')
    console.log(`server is running on PORT:` ,PORT)
})