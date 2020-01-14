const express = require("express");
const router = express.Router();
const Zomato = require("zomato.js");
const zomato = new Zomato("7dcb305c2c8e1148c245007a3f8bb5d8");

router.get("/", (req, res) => {
  zomato
    .reviews({
      res_id: req.query.res_id
    })
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(function(err) {
      console.error(err);
    });
});

module.exports = router;
