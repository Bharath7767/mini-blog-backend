const {User} = require('../models/user')

const getAllUsers = async() => await user_crud.getAllUsers()
const getUserById = async(id) => await user_crud.getUserById(id)
const createUser = async(data) => await user_crud.createUser(User,data)
const updateUser = async(id,data) => await user_crud.updateUser(User,id,data)
const deleteUser = async(id) => await user_crud.deleteUser(id,User)
     
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}