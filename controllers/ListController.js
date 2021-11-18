const { json } = require("body-parser");
const ListModel = require("../models/ListModel");

const insertList = async(req, res) => {

    let newList = new ListModel({
        // title: req.body.title,
        price: req.body.price,
        category: req.body.category
    });

    try {
        console.log(list);
        const list = await newList.save();
        res.status(201).json(list);
    } catch (error) {
        console.log(`Something went wrong! ${error}`);
    }
};

const getList = async(req, res) => {
    try {
        const list = await ListModel.find({});

        res.status(200).json(list);
    } catch (error) {
        console.log(`Something went wrong! ${error}`);
    }
};

module.exports = {
    insertList,
    getList
};