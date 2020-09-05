 import jwt from "jsonwebtoken"
import config from "../config"


const auth  = (req, res, next) => {
    const token = req.header("x-auth-token");


    //CHECK FOR TOKEN
    if(!token){
       return  res.status(401).json({message: "No token, authorization denied"})
    }

    try {
        //VERIFY TOKEN
    const decoded = jwt.verify(token, config.SECRET)

    //ADD USER FROM PAYLOAD
    req.user = decoded
    next();
    } catch (error) {
        res.status(400).json({message: "TOKEN IS NOT VALID"})
    }
}


export default auth;