const express = require("express");
const connectDB = require("./utilities/db");
const path = require("path");

const port = process.env.PORT || 8000;

app = express();

connectDB();

app.use(express.json({extended : false}));
app.use('/session', require('./routes/session'));

if(process.env.NODE_ENV === 'production') {
  // Set Static folder

  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  })
}

app.listen(port, () => console.log(`Running on Port : ${port}`));

