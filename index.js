const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp")
  .then(() => {
    console.log("connection open");
  })
  .catch((e) => {
    console.log("error is:", e);
  });

//defined schema, this is concept on JS
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

//we take schema and tell mongoose we wanna make modal
//Mongoose will take that and create collection called movies (pluralized and lowercase)
const Movie = mongoose.model("Movie", movieSchema); // Movie has to be singular and first letter capitalized.  This gives us model class called movie.

const amadeus = new Movie({ title: "Amadeus", year: 1896, score: 9.6, rating: "R" }); //this makes us new instance of class movie. This is JS object and has not transferred to DB yet.
