const { findUserByEmail } = require('../../api/user/user.service')
const { signToken } = require('../auth.service')

async function loginUserHandler(req, res) {
  const { email, password } = req.body

  try {
    const user = await findUserByEmail(email)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Password is incorrect' })
    }

    const token  = signToken({ email: user.email })

    return res.status(200).json({ token, profile: user.profile })
  } catch (error) {
    return res.status(500).json({ error })
  }
}

async function changePasswordHandler(req, res) {}

async function forgotPasswordHandler(req, res) {}

async function veryfyAccountHandler(req, res) {}


module.exports = {
  loginUserHandler,
  changePasswordHandler,
  forgotPasswordHandler,
  veryfyAccountHandler,
}
