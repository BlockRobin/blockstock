const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '/../build')));
app.use(bodyParser.json())


app.get('/ping', (req, res) => {
  res.send('pongpingfasdffasdfasdfasdfs');
});


// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '../src/index.html'));
// });



app.listen(port, () => console.log(`Listening on port ${port}`));