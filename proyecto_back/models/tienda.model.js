const mongoose =require("mongoose");
const Schema=mongoose.Schema;

const TiendaSchema = new Schema({
    id_articulo: {type: String, required: true, max:60},
    nombre_articulo: {type: String, required: true, max:60},
    talla:{type: String, required: true, max:40},
    descripcion:{type: String, required: true, max:40},
    precio: {type: String, required: true, max:15}
});

module.exports = mongoose.model("tienda", TiendaSchema);
