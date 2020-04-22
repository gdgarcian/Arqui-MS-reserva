const express = require('express');
const router = require('express-promise-router')();


const UserController = require('../controllers/user');

router.route('/')
.get(UserController.index) // Primera
.post(UserController.newUser) // Seguna

router.route('/:userId')
.get(UserController.getUser)// 
.put(UserController.updateUser) //

router.route('/:userId/reservas')
.get(UserController.getUserReserva)//
.post(UserController.newUserReserva) //
// .get()

module.exports = router;
