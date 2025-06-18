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
const port = process.env.PORT || 4000
// connectDB()
connectCloudinary()



//middleware
app.use(express.json())

//for servers
// const cors = require('cors');
const allowedOrigins = [
  'https://e-commerce-app-theta-self.vercel.app',
  'https://admin-e-commerce-one.vercel.app'
];
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['*'],
  // allowedHeaders: ['Content-Type', 'Authorization'],
}));

//for local 
// app.use(cors());


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
