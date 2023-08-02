const route = require('../routes/routes');

const deleteAlbumID = async(req, res) => {
    const { id } = req.params;

    if ( !mongoose.Types.ObjectId.isvalid(id)) {
        return res.status(400).json({ error: 'Invalid Album ID' })
    };

    try {
     const deleteAlbum = await album.findByIdAndDelete(req.params.id);
     if (!deleteAlbum) {
         return res.status(404).json({error: 'Album not found' });
     }
     res.json({ message: 'Album deleted successfully' });
    }
    catch (error) {
     res.status(500).json({ error: 'Internal server error.'})
    }
 };

module.exports=deleteAlbumID;