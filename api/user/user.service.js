const User = require('./user.model');

function getAllUser() {
  return User.find({})
}

function getSingleUser(id) {
  return User.findById(id)
}

function findUserByEmail(email) {
  return User.findOne({ email })
}

function createUser(user) {
  return User.create(user)
}

function updateUser(id, user) {
  return User.findByIdAndUpdate(id, user, { new: true })
}

function deleteUser(id) {
  return User.findByIdAndRemove(id)
}

exports.getAllUser = getAllUser;
exports.getSingleUser = getSingleUser;
exports.findUserByEmail = findUserByEmail;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
