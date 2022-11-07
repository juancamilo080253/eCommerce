// colocamos todo el proceso de conexion con la bd 

const mongoose = require("mongoose");
const host = "localhost";
const port = "27017";
const db = "tienda_lix";


exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console,"Mongodb connection error"))
}
