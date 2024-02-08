Mongoose is Object data mapper(ODM).
Mongoose maps documents coming from a database into usable JS objects
Mongoose provides ways for us to model out our application data and define a schema. It offers easy ways to validate data and build complex queries using JS.

npm i mongoose

'mongodb://127.0.0.1:27017/test'
This URI specifies where to find mongodb locally i.e. its being served on my machine, and which DB to use. It specifies test db to be used. If it doesnt exist, it will make it. If it exists, it will use it.

The central goal of using mongoose is to have easier way to interact with MongoDB from JS land.
Modals are JS classes that we make with Mongoose, that represent collection of info in MongoDB.

First thing to define modal, is by defining schema.
What is a schema: mapping of different collection of keys from mongo to different types in JS. We take data from Mongo which have different types of data which other languages such as Js may or may not have. Therefore, in schema we can specify properties data types.

Syntax to run:
node -i -e "$(<index.js)" //this lets us run js code (i.e object) on node, then we use the method save() to send it over to mongoDB.

//insertMany() returns a promise, and directly sends data to MongodDB. So we do not have to use save() method in node. However, when we instantiate single class we have to use save() method to send JS obj to DB.

//find() takes time to search for result. So we can use CB(), however it is not ideal. The results of find() method is called mongoose query, although not a promise, it is a thenable object. So we can chain .then.

.exec() method gives us full promise. It gives you better stack trace, so we can debug better by seeing what went wrong.

db.movies.find() gives us whole of info, however we are only interested in specific data. So we can attach .then and print data.
Movie.find().then(data=> console.log(data))

Movie.find({year: {$gts:1990}}).then(data=>console.log(data))

Movie.findById() //commonly used method in express

-- Update
This is modal method. They dont resolve with updated data. It just tells us how many were modified. If we want updated documents after update takes effect, we can use findById, findOneAndUpdate.

 Movie.updateMany({title: {$in: ["Amadeus", "Stand by me"]}}, {score: 10}).then(res=>cons
ole.log(res))

.updateMany({selector}, {change})  (syntax)

syntax:
.findOneAndUpdate({selector}, {change}) // gives old data after query as default, so we need to specify third argument (new true in object) {new:true}

.findOneAndUpdate({title: "The Iron"}, {score: 7.8}, {new:true}). then(data=>console.log(data))

--
Delete

These modal methods returns document instead of number of modification done.
.findOneAndDelete()
.findOneAndUpdate()
.findByIdAndUpdate()
.findByIdAndDelete()

