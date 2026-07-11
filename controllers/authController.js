const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { validationResult } = require('express-validator');
const passport = require('passport');
const xss = require('xss');

exports.signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const sanitizedName = xss(req.body.name);
  const sanitizedEmail = xss(req.body.email);
  const sanitizedPassword = xss(req.body.password);

  try {
    let user = await User.findOne({ email: sanitizedEmail });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    user = await User.create({
      name: sanitizedName,
      email: sanitizedEmail,
      password: sanitizedPassword
    });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.status(201).json({ status: 'success', data: { user } });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.login = async (req, res) => {
  const sanitizedEmail = xss(req.body.email);
  const sanitizedPassword = xss(req.body.password);

  try {
    const user = await User.findOne({ email: sanitizedEmail });
    if (!user || !(await user.comparePassword(sanitizedPassword))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.json({ status: 'success', data: { user } });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.googleAuthCallback = passport.authenticate('google', {
  failureRedirect: '/login',
  session: false,
}), (req, res) => {
  const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.cookie('token', token, { httpOnly: true });
  res.redirect('/profile');
};

exports.logout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out' });
};