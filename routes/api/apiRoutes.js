const router = require('express').Router();
var db = require("../../models")

router.route('/createReview').post((req,res) => {
  db.review.create({
    stars: req.body.rating,
    reviewUser: req.body.name,
    reviewHeadline: req.body.headline,
    reviewBody: req.body.reviewbody,
    itemID: req.body.itemID
  })
});

module.exports = router;