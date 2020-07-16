//importing dependencies
const express = require("express");
const router = express.Router();
// server side cache
const apicache = require("apicache");
const cache = apicache.middleware;

// route to handle "api/ping"
const students = {
  students: [
    { id: 1, firstName: "Bob", lastName: "dylan" },
    { id: 2, firstName: "Rob", lastName: "dave" },
    { id: 3, firstName: "don", lastName: "bos" },
  ],
};
//router to test
router.get("/ping", (req, res) => {
  res.status(200).json({
    success: "true",
  });
});
//client object
router.get("/students", cache("10 minutes"), (req, res) => {
  res.status(200).send(JSON.stringify(students));
});
module.exports = router;
