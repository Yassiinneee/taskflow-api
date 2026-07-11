const User = require('../models/User');
const xss = require('xss');

exports.getProfile = (req, res) => {
  res.json({ status: 'success', data: { user: req.user } });
};

exports.updateProfile = async (req, res) => {
  const sanitizedName = xss(req.body.name);
  const sanitizedEmail = xss(req.body.email);

  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        name: sanitizedName,
        email: sanitizedEmail
      },
      { new: true }
    );
    res.json({ status: 'success', data: { user } });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ status: 'success', data: { users } });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.json({ status: 'success', message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};