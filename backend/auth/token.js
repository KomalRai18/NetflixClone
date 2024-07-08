const secret = "secret_key"
import pkg from 'jsonwebtoken';
const { sign, verify } = pkg;

export const getToken = async(user)=>{

    return sign({
        id:user._id,
        email: user.email,
    }, secret, {expiresIn: '1h'});
}
export const verifyToken = async(token)=>{
    return verify(token, secret)
}

 