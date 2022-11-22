const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;


const PostSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    number: {
        type: String,
        trim: true,
        required: true
    },
    location: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
    },
    hidden: {
        type: Boolean,
        default: false
    },

}, { timestamps: true });

module.exports = Mongoose.model("Post", PostSchema);