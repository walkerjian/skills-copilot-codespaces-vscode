// create web server using Express
const express = require('express');
const app = express();
const path = require('path');

// load data
const { comments } = require('./data');

// set up static folder
app.use(express.static(path.join(__dirname, 'public')));

// set up home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// set up comments route
app.get('/comments', (req, res) => {
  res.json(comments);
});

// set up comments/:id route
app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  res.json(comment);
});

// start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});