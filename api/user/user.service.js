const User = require('./user.model');

function getAllUser() {
  return User.find({});
}

function getSingleUser(id) {
  return User.findById(id);
}

function findUserByEmail(email) {
  return User.findOne({ email });
}

function findOneUser(query) {
  return User.findOne(query);
}

function createUser(user) {
  return User.create(user);
}

function updateUser(id, user) {
  return User.findByIdAndUpdate(id, user, { new: true });
}

function deleteUser(id) {
  return User.findByIdAndRemove(id);
}

module.exports = {
  getAllUser,
  getSingleUser,
  findOneUser,
  findUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
