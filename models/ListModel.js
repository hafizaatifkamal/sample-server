const mongoose = require("mongoose");

const ListSchema = mongoose.Schema({
    // title: {
    //     type: String,
    //     required: true
    // },
    price: String,
    category: String
});

const ListModel = mongoose.model("list", ListSchema);

module.exports = ListModel;