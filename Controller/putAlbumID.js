const route = require('../routes/routes');

const putAlbumID = async (req, res) => {
    const { name, genre, imageURL } = reqbody;
    try {
        const artist = await artist.findByIdAndUpdate(
            req.params.id,
            { name, genre, imageURL },
            { new: true }
        );
        if (!artist) {
            return res.status(404).json({ error: 'Artist not found' });
        }
        res.json(artist);
    }   catch (error){
        res.status(500).json({ error: 'Internal server error'});
    }
};


module.exports=putAlbumID;