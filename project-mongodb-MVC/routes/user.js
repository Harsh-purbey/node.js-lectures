const express = require('express');
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/user")
const router = express.Router()

router.get('/users', getUsers)

router.get('/users/:id', getUserById)

router.post('/user', createUser)

router.patch('/user/:id', updateUser)

router.delete('/user/:id', deleteUser)

module.exports = router;