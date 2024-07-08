import { genSalt, hash, compare as _compare } from 'bcrypt';
import userSchema from '../models/userSchema.js';
import {getToken} from '../auth/token.js'

export const handleSignup = async (req,res)=>{

    const {fullname, email, password} = await req.body;
    if(!fullname ||  !email || !password){
        return res.status(401).json({err:"All fields are required!"});
    }
    const emailExist = await userSchema.findOne({email})
    if(emailExist){
        return res.status(404).json("Email already exists...try login")
    }
    const salt = await genSalt();
    const encPassword = await hash(password, salt)
    try {
        const user = await userSchema.create({
            fullname: fullname,
            email: email,
            password: encPassword,
        });
        const token = getToken(user);
        console.log("Entry saved successfully");
        return res.status(201).cookie("token", token, {
            httpOnly: true
        }).json({
            msg:"New User created",
            user,
            success: true
        })
    } catch (error) {
        console.log("Invalid fields...try again", error)
    }
}
export const handleLogin = async (req, res)=>{
    const {email, password} = await req.body;
    if(!email || !password) {return res.status(400).json({msg:"Enter all fields"})}
    const user = await userSchema.findOne({email})
    if(!user) {return res.status(400).json({err:"User not found"})}
    try {
        const compare = await _compare(password, user.password)
        if(!compare){
            res.status(403).json({err:"Incorrect Password!"});
        }
        const token = await getToken(user); // here calling a function to get the token by passing only user to the function...above method can also be used get the jwt token
        return res.status(200).cookie("token", token, {
            httpOnly: true,
        }).json({
            msg: `Welcome Back ${user.fullname}`,
            user,
            success: true,
        })
    } catch (error) {
        console.log(error)
    }
     // const token = jwt.sign({id: user._id}, "23432423423423423"); //here directly passing user id as paylaod and a random string as jwt secret string

    }
export const handleLogout = async (req, res)=>{
    res.status(200).cookie("token", "", {
        httpOnly: true,
        expiresIn: new Date(Date.now()),
    }).json({
        msg:"User Logged Out!",
        success: true,
    })
}

