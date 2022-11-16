const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;


const PostSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    apellido: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    telefono: {
        type: String,
        trim: true,
        required: true
    },
    direccion: {
        type: String,
        trim: true,
        required: true
    },
    descripcion: {
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