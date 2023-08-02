const express = require('express');
const mongoose = require('./db/db');
const route = require('./routes/routes');
const cors = require('cors');
const helmet = require('helmet');


const port = process.env.PORT;
const app = express();
app.use(cors());

//middleware
app.use(express.json());
app.use(route);
app.use(helmet());


app.listen(port, async () => {
  mongoose;
  console.log(`Server listening on port ${port}`);
});