const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller")

router.get("/", user.getUserDetails);
router.post("/", user.setUserDetails);

// router.get("/you", (req, res)=> {
//     console.log("user.route");
//     res.send("This is you user page");
// });

module.exports = router;