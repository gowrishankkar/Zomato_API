const express = require("express");
const router = express.Router();
const Zomato = require("zomato.js");
const zomato = new Zomato("7dcb305c2c8e1148c245007a3f8bb5d8");

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
