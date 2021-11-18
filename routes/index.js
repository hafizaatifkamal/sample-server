const express = require("express");
const router = express.Router();


const {
    insertList,
    getList
} = require("../controllers/ListController");


router.post("/lists", insertList);
router.get("/lists", getList);

module.exports = router;