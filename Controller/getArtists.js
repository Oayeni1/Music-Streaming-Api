const { artist } = require('../db/db.schema');
const route = require('../routes/routes');

const getArtists = async (req, res) => {
    try {
        const Artists = await artist.find().populate('albumCollection');
        res.json(Artists);
        console.log(Artists);
    }   catch (error) {
        res.status(500).json({ error: 'Internal server error.'});
    };
};



module.exports=getArtists;