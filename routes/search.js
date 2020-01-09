const express = require("express");
const router = express.Router();
const Zomato = require("zomato.js");
// const zomato = new Zomato("33fda91f82e355497a5f479efd7d789a");

router.get("/", (req, res) => {
  // res.send("city name : " + req.query.city);
  zomato
    .search({
      q: req.query.city
    })
    .then(data => {
      console.log(data);
      return res.json(data.restaurants);
    })
    .catch(function(err) {
      console.error(err);
    });
});

module.exports = router;
