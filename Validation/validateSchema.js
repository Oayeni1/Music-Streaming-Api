const Joi = require('joi');

const joiSchema = Joi.object({
    title: Joi.string().required(),
    releaseYear: Joi.number().required(),
    genre: Joi.string().required(),
    artistId: Joi.string().required(),
});
const artiistSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    genre: Joi.string().required(),
});
module.exports={joiSchema, artiistSchema};