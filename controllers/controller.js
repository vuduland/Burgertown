var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', (req, res) => {
  res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
  burger.all(data => {
    res.render('index', { burger_data: data });
  });
});

router.post('/burgers/create', function (req, res) {
  burger.create(req.body.burger_name, function () {
    res.redirect('/');
  });
});

router.put('/burgers/:id?', (req, res) => {
  burger.update(req.params.id, result => {
    console.log(result);
    res.sendStatus(200);
  });
});

module.exports = router;
