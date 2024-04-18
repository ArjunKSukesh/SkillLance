import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import createError from '../utils/createError.js';


export const register = async (req, res, next) => {
    try {

        const hash = bcrypt.hashSync(req.body.password, 5)
        const newUser = new User({
            ...req.body,
            password: hash
        });

        await newUser.save();
        res.status(201).send('User has been created')
        
    } catch (error) {
        next(error);

    }

}




export const login = async (req, res, next) => {
try {
    const user = await User.findOne({username : req.body.username});

    //before
    // const err = new Error();
    // err.status = 404;
    // err.message = 'User not found!';
    // if(!user) return res.status(404).send("User not found");
    // if(!user) return next(err);

    //after
    if(!user) return next(createError(404, "User not found"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    //before
    // if(!isCorrect) return res.status(400).send("wrong password or username");
    //after
    if(!isCorrect) return next(createError(400,"wrong password or username"));

    const token = jwt.sign(
        {
            id: user._id,
            isSeller: user.isSeller,
        },
        process.env.JWT_KEY

    )

    const {password, ...info} = user._doc
    res.cookie('accessToken',token,{
        httponly: true
    })
    .status(200).send(info)

} catch (error) {
    // res.status(500).send('something went wrong!!!')

    next(error)
}
}
export const logout = (req, res) => {
    res.send('logout')
}


