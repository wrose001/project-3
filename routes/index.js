const path = require("path");
const router = require("express").Router();
<<<<<<< HEAD
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);
=======
const passport = require("../passport");
const routeHelper = require('./utils/routeHelper');


//const apiRoutes = require("./api");

// API Routes
//router.use("/api", apiRoutes);
/* OAuth Github Routes */
router.get("/login", passport.authenticate('github'));
>>>>>>> 07103b016a93d86a2d9231c3f354e12f9d0a7ff7

router.get('/auth', passport.authenticate('github', {session: false, failureRedirect: routeHelper()}), function(req, res) {
    // Succesful authentication! 
    // Store the generated jwt in the client cookie
    res.cookie('jwt', req.user.jwtToken);
    res.redirect(routeHelper());
});
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

