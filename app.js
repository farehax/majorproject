const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust";
main().then(() =>{
    console.log("connected to db");
}).catch(err =>{
    console.log (err);
})

async function main() {
    await mongoose.connect(MONGO_URL)
    
}
app.get("/",(req,res)=>{
    res.send("hii, i'm root"); 
});
app.get("/testlisting",async (req,res) =>{
    let samplelisting = new listing({
        title: "my new villa",
        description:"by the beach",
        price: 1200,
        location:"calangute, goa",
        country: "india"
    })

   await samplelisting.save();
   console.log("sample was saved");
   res.send ("succesful testing");
});

app.listen(port, () =>{
    console.log("server listining to port : 8080");
});

