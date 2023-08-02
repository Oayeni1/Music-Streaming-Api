const route = require('../routes/routes');
const { artist } = require('../db/db.schema')
let validator= require('../Validation/validateSchema');

const postArtists = async(req, res) => {
    console.log(req.body);
    const { error, value } = validator.artiistSchema.validate(req.body);
    const { name, email, genre } = value

    const imageURL= req.file.path
    // console.log(req.file);

    //if user fail to provide the correct name or genre.
    if (error) {
        console.log(error);
        return res.status(400).json({ error: 'Name and Genre are required'});
    };

    try {
        const Artists = await artist.create({ name, email, genre, imageURL,  albumCollection:null });
        res.status(201).json(Artists);
        console.log(Artists)
    }   catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error '});
    }
};


module.exports=postArtists;