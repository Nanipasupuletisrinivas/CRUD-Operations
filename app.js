const express =require('express');
const mongoose=require('mongoose');


mongoose.connect("mongodb+srv://NaniPasupuleti:9505785028@cluster0.aqnmbqs.mongodb.net/?retryWrites=true&w=majority")

const app=express();



app.use(express.json())

app.use("/Users",require("./routes/first"))


app.listen(4000,()=>
{
    console.log("Data base connecting");
})