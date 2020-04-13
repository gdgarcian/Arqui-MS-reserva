const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	telefono: String,
  nombre: String,
	reserva: [{
		type: Schema.Types.ObjectId,
		ref: 'reserva'
	}]
});

const User = mongoose.model('user', userSchema);
module.exports = User;
