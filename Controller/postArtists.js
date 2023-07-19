const route = require('../routes/routes');
const { artist } = require('../db/db.schema')

const postArtists = async(req, res) => {
    const { name, gerne, imageURL } = req.body;
    try {
        const artists = artist({name, gerne, imageURL });
        await artists.save();
        res.status(201).json(artists);
    }   catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error '});
    }
};


module.exports=postArtists;