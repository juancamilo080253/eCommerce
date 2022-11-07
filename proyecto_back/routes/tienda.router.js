const express = require("express")
const router = express.Router()
const tiendaController=require("../controllers/tienda.controller")
const { remove } = require("../models/tienda.model")

router.post("/", tiendaController.create)
router.get("/", tiendaController.find)
router.get("/:id", tiendaController.findOne)
router.put("/:id", tiendaController.update)
router.delete("/:id", tiendaController.remove)

module.exports=router