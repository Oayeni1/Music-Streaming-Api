const route = require('../routes/routes');
const { artist } = require('../db/db.schema');

const getAlbumID = async (req, res) => {
    const { id } = req.params;
    try {
        const artistId = await artist.findById(id).populate('albumId');
        if (!artistId) {
        return res.status(404).json({ error: 'Artist not found' });
        }
        res.json(artistId);
    } catch (err) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports=getAlbumID;