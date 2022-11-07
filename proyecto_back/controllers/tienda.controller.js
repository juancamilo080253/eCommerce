const Tienda = require("../models/tienda.model");

let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  //crear dato de articulo
  let tienda = new Tienda({
    id_articulo: req.body.id_articulo,
    nombre_articulo: req.body.nombre_articulo,
    talla: req.body.talla,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
  });

  tienda.save(function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al guardar el articulo");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El articulo se guardó correctamente");
    res.json(response);
  });
};

exports.find = function (req, res) {
  Tienda.find(function (err, tiendas) {
    res.json(tiendas);
  });
};

exports.findOne = function (req, res) {
  Tienda.findOne({ _id: req.params.id }, function (err, tienda) {
    res.json(tienda);
  });
};

exports.update = function (req, res) {
  let tienda = {
    id_articulo: req.body.id_articulo,
    nombre_articulo: req.body.nombre_articulo,
    talla: req.body.talla,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
  };

  Tienda.findByIdAndUpdate(req.params.id, { $set: tienda }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al modificar el articulo");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El articulo se modifico correctamente");
    res.json(response);
  });
};

exports.remove = function (req, res) {
  Tienda.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al eliminar el articulo");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El articulo se modifico correctamente");
    res.json(response);
  });
};

exports.remove = function (req, res) {
  Tienda.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al eliminar el articulo");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El articulo fue eliminado correctamente");
    res.json(response);
  });
};
