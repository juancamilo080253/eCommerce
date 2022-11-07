const Usuario = require("../models/usuarios.model");
const crypto = require("crypto") //ecnriptacion de datos
const jwt = require("jsonwebtoken") //llamado a jsonwebtoken

exports.login = function(req, res, next){

    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");

    Usuario.findOne({ usuario: req.body.usuario, pass: hashedpass}, function(err, usuario){
        let response = {
        token:null
        }

        if(usuario !== null){
            response.token = jwt.sign({
                id: usuario._id,
                usuario: usuario.usuario
            }, "__recret__")
        }
        res.json(response);
    })
}