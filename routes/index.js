//importing dependencies
const express = require("express");
const router = express.Router();
// server side cache
const apicache = require("apicache");
const cache = apicache.middleware;

// route to handle "api/ping"
const students = {
  students: [
    { id: 1, firstName: "zak", lastName: "david" },
    { id: 2, firstName: "Rob", lastName: "dave" },
    { id: 3, firstName: "don", lastName: "bos" },
    { id: 4, firstName: "Bob", lastName: "dylan" },
    { id: 5, firstName: "Ronald", lastName: "check" },
    { id: 6, firstName: "steve", lastName: "dominic" },
    { id: 7, firstName: "Divine", lastName: "dave" },
    { id: 8, firstName: "Tristan", lastName: "Bliss" },
    { id: 9, firstName: "ajja", lastName: "tolstoy" },
    { id: 10, firstName: "ace ventura", lastName: "gandhi" },
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
  res.status(200).send(students);
});
module.exports = router;
