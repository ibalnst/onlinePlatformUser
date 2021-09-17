import asyncHandler from 'express-async-handler';
import User from '../models/userModal.js';
import genToken from '../utils/genToken.js';

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const existUser = await User.findOne({ email });

  if (existUser) {
    res.status(400).json({ message: 'User Already exists' });
    throw new Error('User Already Exist');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: genToken(user._id),
    });
  } else {
    res.status(400).json({ message: 'User not found' });
    throw new Error('User not found');
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: genToken(user._id),
    });
  } else {
    res.status(401).json({ message: 'Invalid Email or Password' });
    throw new Error('Invalid Email or Password');
  }
});

export { registerUser, authUser };
