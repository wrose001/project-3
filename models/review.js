const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    stars: {
    type: int,
    },
    reviewUser: {
        type: String,
    },
    reviewBody: {
        type: String,
    }

});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
