/**
 * Controller for user
 */
const crypto = require('crypto');

const {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require('./user.service');
const { sendMailSendGrid } = require('../../utils/mail');

async function getAllUserHandler(req, res) {
  try {
    const users = await getAllUser();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function getSingleUserHandler(req, res) {
  const { id } = req.params;
  try {
    const user = await getSingleUser(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { profile } = user;

    return res.json(profile);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function createUserHandler(req, res) {
  const userData = req.body;

  try {
    const hash = crypto.createHash('sha256')
      .update(userData.email)
      .digest('hex');

    userData.passwordResetToken = hash;
    userData.passwordResetExpires = Date.now() + 3_600_000 * 24; // 24 hour

    const user = await createUser(userData);
    // Send email to user
    const message = {
      from: '"no-reply" <cristian.moreno@makeitreal.camp>', // sender address
      to: user.email, // list of receivers
      subject: 'Activate account Template', // Subject line
      template_id: 'd-649011f35b854690a0e5f47de11eb2f2', // template id
      dynamic_template_data: {
        firstName: user.profile.firstName.toUpperCase(),
        lastName: user.profile.lastName.toUpperCase(),
        url: `${process.env.FRONTEND_URL}/verify-account/${hash}`,
      },
    };

    await sendMailSendGrid(message);

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function updateUserHandler(req, res) {
  const { id } = req.params;
  const userData = req.body;

  try {
    const user = await updateUser(id, userData);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function deleteUserHandler(req, res) {
  const { id } = req.params;

  try {
    await deleteUser(id);

    return res.status(200).json(null);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  getAllUserHandler,
  getSingleUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
