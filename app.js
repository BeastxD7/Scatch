const express = require('express')
const app = express()

require('dotenv').config()

const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const path = require('path');
const connectDb = require('./config/mongoose-connection')
const ownersRouter = require('./routes/ownersRouter')
const usersRouter = require('./routes/usersRouter')
const productsRouter = require('./routes/productsRouter')



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set('view engine','ejs')


app.use('/owners', ownersRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.get('/', async(req,res) => {
   try {

    const connection = await mongoose.connect(process.env.MONGO_DB_URI,{dbName:"Scatch"})
    await console.log('Database Connected Sucessfully!');

    
    res.send('Hello World! ')

   } catch (error) {
    console.log(error);
   }
})

app.listen(process.env.PORT,()=>{
    console.log(`Server running at port ${process.env.PORT}`);
})