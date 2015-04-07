
// module depenencies
var mongoose = require('mongoose');

// Schema
var ArtistSchema = mongoose.Schema({
	name: {type:String, requried:true},
	slug: {type:String, required:true}



})

// return model
module.exports = mongoose.model('Artist', ArtistSchema);