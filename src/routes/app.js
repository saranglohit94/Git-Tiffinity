const express = require("express");
const path = require("path");

const router = express.Router();
const userRouter = require("../routes/user.routes");
const mealR = require("../routes/meal.routes");
const addmealR = require("../routes/addmeal.routes");
const registrationR = require("../routes/registration.routes");
const customerR = require("../routes/customer.routes");
const remarkR = require("../routes/remark.routes")



router.use("/user", userRouter);
router.use("/meal",mealR);
router.use("/addmeal",addmealR);
router.use("/registration", registrationR);
router.use("/customer", customerR);
router.use("/remark", remarkR);
router.use("/test", async (req, res) => {
  res.send("Hi");
});

module.exports = router;
