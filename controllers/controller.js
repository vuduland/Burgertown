const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', (req, res) => {
  res.redirect('/burgers');
});

router.get('/burgers', (req, res) => {
  burger.all(data => {
    res.render('index', { burger_data: data });
  });
});

router.post('/burgers/create', (req, res) => {
  burger.create(req.body.burger_name, result => {
    console.log(result);
    res.sendStatus(200);
  });
});

module.exports = router;
