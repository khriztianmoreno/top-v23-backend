const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Payment = new mongoose.Schema({
  customerId: String,
  cards: [
    {
      paymentMethodId: String,
      brand: String,
      country: String,
      expMonth: Number,
      expYear: Number,
      funding: String,
      last4: String,
    },
  ],
});

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  avatar: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'company'],
    default: 'user',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  payment: Payment,
}, { timestamps: true });

UserSchema.virtual('fullName').get(function fullName() {
  const { firstName, lastName } = this;

  return `${firstName} ${lastName}`;
});

UserSchema.virtual('profile').get(function profile() {
  const {
    firstName, lastName, email, role,
  } = this;

  return {
    firstName,
    lastName,
    email,
    role,
  };
});

UserSchema.pre('save', async function save(next) {
  const user = this;

  try {
    if (!user.isModified('password')) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function comparePassword(candidatePassword, next) {
  const user = this;

  try {
    const isMatch = await bcrypt.compare(candidatePassword, user.password);

    return isMatch;
  } catch (error) {
    next(error);
    return false;
  }
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
