import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import userRouter from './routes/userRoute.js'
import connectCloudinary from './config/cloudinary.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
// import connectDB from './config/mongodb.js'

// App Config
const app = express()
const port = process.env.PORT || 5000
// connectDB()
connectCloudinary()



//middleware
app.use(express.json())
app.use(cors({
    origin: 'https://e-commerce-app-theta-self.vercel.app',
    credentials: true, 
}));


//mongodb local
mongoose.connect(process.env.MONGODB_URI,) 
.then(() => {

 console.log('MongoDB connected');
})
.catch(() => {

 console.log('MongoDB connection error:');
})





// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=> {
     console.log(`Server running on PORT ${port}`);
})