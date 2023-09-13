// Create web server using node.js and express.js
// 1. Create a web server using node.js and express.js
// 2. Create a route for the root path
// 3. Create a route for a path called /comment
// 4. Create a route for a path called /comment/new
// 5. Create a route for a path called /comment/:id
// 6. Create a route for a path called /comment/:id/edit
// 7. Create a route for a path called /comment/:id/delete

var express = require('express');
var router = express.Router();

// 2. Create a route for the root path
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 3. Create a route for a path called /comment
router.get('/comment', function(req, res, next) {
  res.send('respond with a comment');
});

// 4. Create a route for a path called /comment/new
router.get('/comment/new', function(req, res, next) {
  res.send('respond with a new comment');
});

// 5. Create a route for a path called /comment/:id
router.get('/comment/:id', function(req, res, next) {
  res.send('respond with a comment id');
});

// 6. Create a route for a path called /comment/:id/edit
router.get('/comment/:id/edit', function(req, res, next) {
  res.send('respond with a comment id edit');
});

// 7. Create a route for a path called /comment/:id/delete
router.get('/comment/:id/delete', function(req, res, next) {
  res.send('respond with a comment id delete');
});

module.exports = router;