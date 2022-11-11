import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { createError } from "../error.js";

export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been created!");
  } catch (error) {
    // next(createError(404, 'not found sorry!'));
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user)
      return next(
        createError(404, "There is no user with this name, please try again!")
      );

    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect)
      return next(
        createError(400, "Wrong name or password, please try again!")
      );

    const token = jwt.sign({ id: user._id }, process.env.JWT);
    const { password, ...others } = user._doc; // to hide password

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
    //   .json(user);
  } catch (error) {
    // next(createError(404, 'not found sorry!'));
    next(error);
  }
};

export const googleAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(user._doc);
      //   .json(user);
    } else {
      const newUser = new User({
        ...req.body,
        fromGoogle: true,
      });
      const savedUser = await newUser.save();
      const token = jwt.sign({ id: savedUser._id }, process.env.JWT);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(savedUser._doc);
      //   .json(user);
    }
  } catch (error) {
    next(error);
  }
};
