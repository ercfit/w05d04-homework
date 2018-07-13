

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
const mongoose = require ("mongoose");
const app = mongoose.connection;
const Vampire = require("./models/vampires");//schema
const Popvamp = require("./models/populateVampires");//vampire data

mongoose.connect("mongodb://localhost:27017/vampire");
app.on("error", (err) => {
	console.log(err, "ERROR message");
});

app.on("connected", () => {
	console.log("MONGOOSE connected!");
});

// Vampire.collection.insertMany(Popvamp, (err, data) => {
// 	console.log("added vampire stats");
// 	mongoose.connection.close();
// })

// ### Add some new vampire data
// Vampire.create({
// 	name: "Brian",
// 	hair_color: "black",
// 	eye_color: "brown",
// 	dob: new Date(1976, 6, 18, 18, 18),
// 	loves:["Erica", "football", "golf", "cookies"],
// 	location: "Denver, CO, US",
// 	gender:"m",
// 	victims: 37
// }, (err, vampBrian) => {
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(vampBrian);
// 	}
// });	

// Vampire.create({
// 	name: "Barre",
// 	hair_color: "black",
// 	eye_color: "brown",
// 	dob: new Date(1980, 5, 17, 17, 17),
// 	loves:["Lindsey", "football", "basketball", "cupcakes"],
// 	location: "Detroit, MI, US",
// 	gender:"m",
// 	victims: 32
// }, (err, vampBarre) => {
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(vampBarre);
// 	}
// });	

// Vampire.create({
// 	name: "Erica",
// 	hair_color: "black",
// 	eye_color: "brown",
// 	dob: new Date(1980, 2, 27, 27, 27),
// 	loves:["Brian", "tennis", "sleep", "kale"],
// 	location: "Denver, CO, US",
// 	gender:"f",
// 	victims: 37
// }, (err, vampErica) => {
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(vampErica);
// 	}
// });	

// Vampire.create({
// 	name: "Autumn",
// 	hair_color: "brown",
// 	eye_color: "brown",
// 	dob: new Date(1981, 3, 17, 17, 17),
// 	loves:["Rich", "parkor", "gymnastics", "kombucha"],
// 	location: "Austin, TX, US",
// 	gender:"f",
// 	victims: 40
// }, (err, vampAutumn) => {
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(vampAutumn);
// 	}
// });	
/////////////////////////////////////////////////
// ## QUERYING
//1
// Vampire.find({gender: "f"}, (err, ladies) => {
// 		console.log(ladies);
// 	});
//2
// Vampire.find({victims: {$gt: 500}}, (err, theDevoured) => {
// 	console.log(theDevoured);
// });
//3
// Vampire.find({victims: {$lte: 150}}, (err, theDevoured) => {
// 	console.log(theDevoured);
// });
//4
// Vampire.find({victims: {$ne: 210234}}, (err, theDevoured) => {
// 	console.log(theDevoured);
// });
//5
Vampire.find({$and: [{victims:{$gt:150}}, {victims:{$lt: 500}}]}, (err, theDevoured) => {
	console.log(theDevoured);
});

/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
