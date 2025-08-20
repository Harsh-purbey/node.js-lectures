const { User } = require('../models/user')

const getUsers = async (request, response) => {
    const users = await User.find();
    return response.status(200).json({
        success: true,
        data: users,
        message: "List of all users"
    })
}

const getUserById = async (request, response) => {
    const { id } = request.params;

    const user = await User.findById(id);

    return response.status(200).json({
        success: true,
        data: user,
        message: "User found"
    })
}

const createUser = async (request, response) => {
    const { firstName, lastName, email, jobTitle } = request.body;
    if (!firstName || !lastName || !email || !jobTitle) {
        return response.status(400).json({ message: "Fileds are missing" })
    }
    const user = await User.create({ firstName, lastName, email, jobTitle })
    return response.status(201).json({
        success: true,
        data: user,
        message: "User created successfully"
    })
}

const updateUser = async (request, response) => {
    const { id } = request.params;
    const user = await User.findByIdAndUpdate(id, request.body, { new: true })
    if (user) {
        return response.status(200).json({
            success: true,
            data: user,
            message: "Record updated successfully"
        })
    }
}

const deleteUser = async (request, response) => {
    const { id } = request.params;
    const user = await User.findByIdAndDelete(id);
    if (user) {
        return response.status(200).json({
            success: true,
            message: "Record deleted successsfully"
        })
    }
}

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser }