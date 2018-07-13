const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
	name: {type:String, required: true},
	hairColor: {type: String, default: "blonde"},
	eyeColor: {type: String},
	dob: {type: Date},
	loves:[String],
	location: {type: String},
	gender: {type: String},
	victims: {type: Number, min: 0}
})



const Vampire = mongoose.model("Vampire", vampireSchema);
module.exports = Vampire;