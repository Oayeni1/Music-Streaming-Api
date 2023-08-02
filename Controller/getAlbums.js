const route = require('../routes/routes');
const { album } = require('../db/db.schema');


const getAlbum = async (req, res) => {
    try {
        const allAlbums = await album.find().populate('artistId');
        res.json(allAlbums);
    }   catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports=getAlbum;