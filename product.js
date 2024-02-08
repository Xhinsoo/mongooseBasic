const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("connection open");
  })
  .catch((e) => {
    console.log("error is:", e);
  });

  const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number 
    }

  })

  const Product = mongoose.model('Product', productSchema);

  const bike = new Product({name: "Mountain Bike", price: "599", color: red}) //it can turn string numbers into int numbers 
  bike.save()
    .then(data=>console.log(data))
    .catch(err=>console.log("error id",err))