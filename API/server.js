
import express from 'express'
import mongoose from 'mongoose';

const app = express();
mongoose.connect("mongodb+srv://muhammad000zubair:XtDN0OM3LYuRQeJL@mern-blog-project.5igjsfa.mongodb.net/",{
    dbName: "Marn-Blog-Project"
}).then(()=>console.log("MonogoDB is Connected"))

const port = 4000;

app.listen(port,()=>console.log(`Server is running on Port ${port}`))