const { Router } = require('express');
const multer = require('multer');

const getArtists = require('../Controller/getArtists');
const postArtists = require('../Controller/postArtists');
const postalbum = require('../Controller/postAlbums');
const putArtistID = require('../Controller/putArtistID');
const putAlbumID = require('../Controller/putAlbumID');
const getArtistID = require('../Controller/getArtistID');
const deleteAlbumID = require('../Controller/deleteAlbumID');
const deleteArtistID = require('../Controller/deleteArtistID');
const getAlbums = require('../Controller/getAlbums');
const getAlbumID = require('../Controller/getAlbumID');

const route = Router();
const postImage = multer({ dest: 'imagesUpload/'});

route.get('/api/artists', getArtists);

route.post('/api/artist',postImage.single('artistImage'), postArtists);

route.post('/api/albums',postImage.single('albumCover'), postalbum);

route.put('/api/artists/:id', putArtistID);

route.put('/api/albums/:id', putAlbumID);

route.get('/api/artists/:id', getArtistID);

route.delete('/api/artists/:id', deleteAlbumID);

route.delete('/api/albums/:id', deleteArtistID);

route.get('/api/albums', getAlbums);

route.get('/api/albums/:id', getAlbumID);

module.exports=route