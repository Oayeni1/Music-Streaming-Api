const route = require('../routes/routes');
const { album, artist } = require('../db/db.schema');
const  validator  = require('../Validation/validateSchema');
const mailing = require('../nodemailer');


const postAlbums= async (req, res) => {

    // Validate input
    const { error, value } = validator.joiSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const { title, releaseYear, genre, artistId } = req.body;
    const albumCover = req.file.path

    // if the property is not correct.
    if (!title || !releaseYear || !genre || !artistId) {
         res.status(400).json({ error: 'Title, releaseYear, genre, and artist ID are required' });
    }try {
        let isArtist= await artist.findById({_id:artistId})
        if(isArtist){
        const createAlbum = await album.create({
            title,
            releaseYear,
            genre,
            artistId,
            albumCover
        });
        
        mailing(isArtist.email, 'Test Email from Nodemailer', 'Hello, this is Balo testing email using Nodemailer! I hope you are good?')
        .catch(console.error);
        res.status(201).json(createAlbum);
    }
    else{
        res.status(403).json("Artist not exist")
    }
    }   catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error...'});
    }
    
}




module.exports=postAlbums;