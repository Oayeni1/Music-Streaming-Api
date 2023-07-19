const mongoose = require('mongoose');

const artistProperties = mongoose.Schema({
    name: { 
        type: String,
        require: true
    },
    genre: { 
        type: String,
        require: true
    },
    imageURL: { 
        type: String,
        require: true
    },
    
})

const albumProperties = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    releaseYear: {
        type: Number, String,
        require: true
    },
    genre: { 
        type: String,
        require: true
    },
    artistId: {
        type: String,
        require: true
    },
    albumCover: {
        type: String,
        require: true
    }
});

module.exports.artist= mongoose.model("artist", artistProperties);
module.exports.album= mongoose.model("album", albumProperties);
