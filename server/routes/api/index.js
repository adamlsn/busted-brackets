const router = require("express").Router();
const bracket = require("/bracket")
const user = require("./user")

router.use("/brackets", bracket);
router.use("/users", user);

module.exports = router;