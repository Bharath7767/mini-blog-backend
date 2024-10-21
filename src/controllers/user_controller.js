const user_crud = require('../crud/user_crud')

const getAllUsers = async(req,res) => {
    try {
        const users = await user_crud.getAllUsers()
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: "Failed to fetch users"})
    } 
};

const getUserById = async(req,res) => {
    const{id} = req.params;
    try {
     const user = await user_crud.getUserById(id)
     if(user){
         res.status(200).json(user)   
     }else{
        res.status(500).json({error:"User not found"})
     }
    } catch (error) {
        res.status(500).json({error:"Failed to fetch user"})
    }
};

const createUser = async(req,res) => {
    const{name,email,password} = req.body;
    try {
        const newUser = await user_crud.createUser({name,email,password})
        res.status(201).send(newUser)
    } catch (error) {
        res.status(500).json({error:"Failed to create User"})
    }
};

const signup = async(req,res) => {
    const{name,email,password} = req.body;
    try {
        await user_crud.createUser({
            name:name,
            email:email,
            password:password
        })
        res.status(201).json({message:"User signed successfully"})
    } catch (error) {
        res.status(500).json({error:"Failed to signup"})
    }
};

const login = async(req,res) => {
    const{email,password} = req.body;
    try {
        const user = await User.findOne({where:{email}});
        if(!user || !(await user.validatePassword(password))){
            return res.status(401).json({message:"Invalid credentials"})
        }  else{
               return res.status(200).json({message:"Login successfully"})
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"Internal server error"})
    }
};

const updateUser = async(req,res) => {
    const {id} = req.params;
    const {name,email} = req.body;
    try {
        const user = await user_crud.getUserById(id)
        if(user){
            user.name = name;
            user.email = email;
            await user.save();
            res.status(200).json(user) 
        }else{
            res.status(404).json({error:"User not found"})
        }
    } catch (error) {
        return res.status(500).json({error:"Failed to Update user"})
    }
};

const deleteUser = async(req,res) => {
    const {id}  = req.params;
    try {
       const user = await user_crud.getUserById(id)
       if(user){
        await user_crud.deleteUser(id)
        res.status(204).json({error:"User deleted"})
       }else{
        res.status(404).json({error:"User not found"})
       }
    } catch (error) {
        res.status(500).json({error:"Failed to delete User"})
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    signup,
    login,
    updateUser,
    deleteUser
}