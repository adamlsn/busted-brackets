const { Schema, model } = require('mongoose');
const { User } = require('../models');

const { signToken } = require('../utils/auth');

const UserSchema = new Schema(
    {
            // get a signle user
    getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
            $or: [{_id: user? user._id : params.id }, { username: params.username }],
        });

        if (!foundUser) {
            return res.status(400).json({ message: 'Cannot find a user with this id!'});
        }
        res.json(foundUser);
    },
    // create a user
    createUser({ body }, res) {
        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: 'Something went wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user })
    },
    // login user, sign a token and send it back
    login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        if (!user) {
            return res.status(400).json({ message: "Can't find this user" });
        }

        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
            return res.status(400).json({ message: 'Wrong password! '});
        }
        const token = signToken(user);
        res.json({ token, user });

    }

    }
)

const User = model("User", UserSchema)

module.exports = User;