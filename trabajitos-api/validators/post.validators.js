const { body, param } = require("express-validator");
const validators = {};

validators.createPostValidator = [
    body("nombre")
        .notEmpty()
        .withMessage("El nombre no debe ser vacio"),
    body("descripcion")
        .notEmpty().withMessage("La descripcion no debe ser vacia")
        .isLength({ max: 280 }).withMessage("La descripcion no debe superar los 240 carcteres"),
    body("image")
        .optional()
        .notEmpty().withMessage("Debes de colocar una imagen")
        .isURL().withMessage("La imagen debe ser una URL"),
    body("email")
        .notEmpty()
        .withMessage("Debe escribir su correo"),
    body("telefono")
        .notEmpty()
        .withMessage("El nombre no debe ser vacio"),
    body("direccion")
        .notEmpty()
        .withMessage("Debe escribir su direccion"),
    body("apellido")
        .notEmpty()
        .withMessage("El nombre no debe ser vacio")

];


validators.findByIdValidator = [
    param("identifier")
        .notEmpty().withMessage("El id no debe ir vacio")
        .isMongoId().withMessage("El id debe ser de mongo")
]

module.exports = validators;