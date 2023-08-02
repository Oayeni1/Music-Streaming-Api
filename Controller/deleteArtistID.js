const route = require('../routes/routes');

const deleteArtistID = async(req, res) => {
    const { id } = req.params;

    if ( !mongoose.Types.ObjectId.isvalid(id)) {
        return res.status(400).json({ error: 'Invalid Artist ID' })
    };

   try {
    const deleteArtist = await artist.findByIdAndDelete(req.params.id);
    if (!deleteArtist) {
        return res.status(404).json({error: 'Artist not found' });
    }
    res.json({ success: true });
   }
   catch (error) {
    res.status(500).json({ error: 'Internal server error.'})
   }
};


module.exports=deleteArtistID;