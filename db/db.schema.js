const mongoose = require('mongoose');

const artistProperties = mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true,
    },
    genre: { 
        type: String,
        required: true
    },
    imageURL: { 
        type: String,
        required: true
    },
    albumCollection:{
        type:[{type:mongoose.Schema.Types.ObjectId, ref:"album"}]
    }
    
})

const albumProperties = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    genre: { 
        type: String,
        required: true
    },
    artistId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'artist',
        required: true
    },
    albumCover: {
        type: String,
        required: true
    }
});

module.exports.artist= mongoose.model("artist", artistProperties);
module.exports.album= mongoose.model("album", albumProperties);
