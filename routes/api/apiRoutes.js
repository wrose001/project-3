const router = require('express').Router();
let Item = require('../models/items.model');

router.route('/items').get((req,res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;