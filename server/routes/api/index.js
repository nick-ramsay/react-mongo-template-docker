const router = require("express").Router();
const rmtRoutes = require("./rmtRoutes");

// react-mongo-template-docker routes
router.use("/react-mongo-template-docker", rmtRoutes);

module.exports = router;