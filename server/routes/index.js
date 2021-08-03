const router = require("express").Router();
const apiRoutes = require("./api")

router.use("/api", apiRoutes);

const things = ["monkey", "dog", "cat", "pig"]

router.use("/", (req, res, next) => {
    console.log("ROUTE WORKS");
    next()
})

router.get("/", (req, res) =>{
    res.json(things)
})

module.exports = router;