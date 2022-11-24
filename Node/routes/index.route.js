const express = require("express");
const router = express.Router();
const app = express();
const userRoutes = require("./user.route");
const authRoutes = require("./auth.route");
const authMiddleware = require("../middleware/auth.middleware");

router.use("/user", userRoutes);
router.use(authMiddleware.verifyToken)
router.use("/auth", authRoutes);

router.get("/", (req, res) => {
    res.send('This is your page!!');
});

module.exports = router;