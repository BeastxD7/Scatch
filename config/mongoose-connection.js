const mongoose = require('mongoose')

const connectDb = async () =>{
    try {
    
        await mongoose.connect(process.env.MONGO_DB_URI,{dbName:"Scatch"})
        await console.log('Database Connected Sucessfully!');

    } catch (error) {
        console.log(error);
    }
}
connectDb()

module.export = connectDb