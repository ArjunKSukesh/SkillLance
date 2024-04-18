import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import createError from '../utils/createError.js';

export const deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id)
  
    if(req.userId !== user._id.toString()){
        // return res.status(403).send("You can only delete only your account");
        return next(createError(403, "You can only delete only your account"))
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("deletes")

    

}


