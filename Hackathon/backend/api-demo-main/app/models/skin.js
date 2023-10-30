var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SkinSchema = new Schema({
  id: { type: Number, required: true },
  nombre: { type: String, required: true },
  tipos: { type: String, required: true },
  precio: { type: Number, required: true },
  color: { type: String, required: true },
});

module.exports = mongoose.model("Skin", SkinSchema);
