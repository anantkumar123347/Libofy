const dotenv=require('dotenv')
dotenv.config()
const express = require("express");
const app = express();
const connectDB=require('./config/db.config.js')
const connectCloud=require('./config/cloudinary.config.js')
const bookroutes=require('./routes/book.routes')
const adminroutes=require('./routes/admin.routes.js')
const userroutes=require('./routes/user.routes')
const cors=require('cors')
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    console.log("App is working");
    res.send("App is working");
});
connectDB()
connectCloud()
app.use("/books",bookroutes)
app.use("/admin",adminroutes)
app.use("/user",userroutes)
app.listen(process.env.PORT, () => {
    console.log(`App is listening at PORT 5000`);
});
