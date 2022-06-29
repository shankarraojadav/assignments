import User from "./models/UserSchema.js";


export const addUser =async (req, res) => {
    try {
        const user = req.body;
        console.log(user)
        const newUser =new User(user);
        await newUser.save();
        res.status(200).json({msg: "signup successfull"})
    } catch (error) {
        res.status(404).json({msg: error.message})
    }
};

export const Authenticate = async (req, res) => {
    
    try {
        const findUser =await User.findOne({username: req.body.username, password:req.body.password});
       res.status(200).json(findUser)
    } catch (error) {
        res.status(404).json({msg: error.message})
    }
}