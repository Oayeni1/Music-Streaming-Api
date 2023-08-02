const route = require('../routes/routes');
const { album } = require('../db/db.schema');


const getAlbumID = async (req, res) => {
    const { id } = req.params;
    try {
        const albumId = await album.findById(id).populate('artistId');
        if (!albumId) {
        return res.status(404).json({ error: 'Album not found' });
        }
        res.json(albumId);
    } catch (err) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
};



module.exports=getAlbumID;