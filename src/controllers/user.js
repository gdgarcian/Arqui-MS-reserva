const User = require('../models/user');
const Reserva = require('../models/reserva');
const Joi = require('joi');

const idSchema = Joi.object().keys({
	userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
});


module.exports = {
	index: async (req, res, next) => {
		const users = await User.find({});
		res.status(200).json(users);
	},

//Metodo POST
	newUser: async (req, res, next) => {
    console.log(req.body);
		const newUser = new User(req.body);
		const user = await newUser.save();
		res.status(201).json(user);
	},
//Metodo GET
	getUser: async (req, res, next) => {
		const { userId } = req.params;
		const user = await User.findById(userId);
		res.status(200).json(user);
	},

	replaceUser: async (req, res, next) => {
		const { userId } = req.params;
		const newUser = req.body;
		const oldUser = await User.findByIdAndUpdate(userId, newUser);
		res.status(200).json({success: true});
	},

	updateUser: async (req, res, next) => {
		const { userId } = req.params;
		const newUser = req.body;
		const oldUser = await User.findByIdAndUpdate(userId, newUser);
		newUser._id = oldUser._id;
		res.status(200).json(newUser);
	},

	getUserReserva: async (req, res, next) => {
		console.log("Holal mundooooo");
		console.log(req.params);
		const { userId } = req.params;
		const user = await User.findById(userId).populate('reserva');
		res.status(200).json(user.reserva);
	},

	newUserReserva: async (req, res, next) => {
		const { userId } = req.params;
		console.log("userID ", userId);
		console.log(req.body);
		const newReserva = new Reserva(req.body);
		const user = await User.findById(userId);
		newReserva.user = user;
		await newReserva.save();
		user.reserva.push(newReserva);
		await user.save();
		res.status(200).json(newReserva);
	}
};
