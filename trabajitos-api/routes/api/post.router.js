const express = require("express");
const router = express.Router();

const postController = require("../../controllers/post.controller");

const postValidators = require("../../validators/post.validators");
const runValidators = require("../../validators/index.middleware")

router.get("/", postController.findAll);

router.get("/:identifier",
    postValidators.findByIdValidator,
    runValidators,
    postController.findOneById);

router.post("/",
    postValidators.createPostValidator,
    runValidators,
    postController.create);

module.exports = router;


//validdciones de id
//postValidators.findByIdValidator,
//runValidators,

//validaciones crear
//postValidators.createPostValidator,
//runValidators,