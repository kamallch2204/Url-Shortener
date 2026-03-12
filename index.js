const express=require('express');
const urlRoute= require('./routes/url');
const {connectDB}=require('./connect');
require("dotenv").config();
const URL=require('./models/url');
const app=express();
const PORT = process.env.PORT || 8001;
connectDB(process.env.MONGO_URI).then(()=>
    console.log("Connected to MongoDB")
)
app.use(express.json());
app.use("/url",urlRoute);
app.get("/:shortId",async (req,res)=>{
   const shortId=req.params.shortId;
   const entry= await URL.findOneAndUpdate(
        {shortId},
        {$push:{visitHistory:{timestamp:Date.now()}}},
    )
    res.redirect(entry.redirectUrl);
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})