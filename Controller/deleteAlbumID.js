const route = require('../routes/routes');

const deleteAlbumID = async(req, res) => {
    try {
     const album = await Album.findByIdAndDelete(req.params.id);
     if (!album) {
         return res.status(404).json({error: 'Album not found' });
     }
     res.json({ success: true });
    }
    catch (error) {
     res.status(500).json({ error: 'Internal server error.'})
    }
 };

module.exports=deleteAlbumID;