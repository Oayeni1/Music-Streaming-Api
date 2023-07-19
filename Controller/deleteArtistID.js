const route = require('../routes/routes');

const deleteArtistID = async(req, res) => {
   try {
    const artist = await Artist.findByIdAndDelete(req.params.id);
    if (!artist) {
        return res.status(404).json({error: 'Artist not found' });
    }
    res.json({ success: true });
   }
   catch (error) {
    res.status(500).json({ error: 'Internal server error.'})
   }
};


module.exports=deleteArtistID;