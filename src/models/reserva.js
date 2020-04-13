const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
  tipoServicio: String,
  fechaServicio: String,
  horaServicio: String,
  lugarServicio: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

const reserva = mongoose.model('reserva', carSchema);
module.exports = reserva;
