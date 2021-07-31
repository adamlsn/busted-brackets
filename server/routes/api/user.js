const router = require("express").Router();
const{
    getSingleUser,
    createUser,
    login
} = require("../../models/User");

router
    .route("/")
    .post(createUser);

router
    .route("/:userId")
    .get(getSingleUser);

router
    .route("/login")
    .get(login);

module.exports = router;