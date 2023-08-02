const { default: mongoose } = require('mongoose');
const route = require('../routes/routes');
const {artist}= require('../db/db.schema')

const putArtistID = async (req, res) => {
    const { id } = req.params;
    const { name, genre, imageURL } = req.body;

    //if not a valid id with the one inside mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid Artist ID '});
    }

    try {
        const updatedArtist = await artist.findByIdAndUpdate(id, { name, genre, imageURL  }, {new: true });
        if (!updatedArtist) {
            return res.status(400).json({ error: 'Artist not found' });
        }
        res.json(updatedArtist);
    }   catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error.'})
    }
};

module.exports=putArtistID;