const mongoose = require("mongoose");
const schema =mongoose.schema;


const listingSchema = new schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        set:(v) => v ==="" ? "https://unsplash.com/photos/a-group-of-pink-flowers-YCfL5hfYD8s" : v,
    },
    price:Number,
    location:String,
    country:String,
})

const listing = mongoose.model("listing", listingSchema);
module.export = listing;