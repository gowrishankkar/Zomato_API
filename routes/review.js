const express = require("express");
const router = express.Router();
const Zomato = require("zomato.js");
const zomato = new Zomato("33fda91f82e355497a5f479efd7d789a");

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
