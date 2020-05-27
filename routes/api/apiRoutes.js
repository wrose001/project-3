const router = require('express').Router();
var db = require("../models")

router.route('/createReview').get((req,res) => {
  db.review.create({
    stars: req.body.stars,
    reviewUser: req.body.User,
    reviewBody: req.body.reviewBody
  })
});

router.route('/signup').get((req,res) => {
  db.review.create({
  username: req.body.username,
  userCreated: req.body.userCreated,
  jwtToken: req.body.token,
  accessToken: req.body.accessToken,
  githubId: req.body.githubId,
  })
});

module.exports = router;