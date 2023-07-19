const express = require('express');
const mongoose = require('./db/db');
const route = require('./routes/routes');

const port = process.env.Port;
const app = express();

//middleware
app.use(express.json());
app.use(route);

app.listen(port, async () => {
   mongoose;
  console.log(`Server listening on port ${port}`);
});