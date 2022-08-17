/**
 * Controller for user
 */
const {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require('./user.service');
const { sendNodeMailer } = require('../../utils/mail');

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
    const user = await createUser(userData);
    // Send email to user
    const message = {
      from: '"no-reply" <info@top-v23.com>', // sender address
      to: user.email, // list of receivers
      subject: 'Active account', // Subject line
      html: `
        <h1 style="color: green;">Welcome</h1>
        <p style="color: #0070f3;">Please click in this link to active account</p>
        <a href="http://localhost:3000/verify-account/token" target="_blank" rel="noopener noreferrer">Verify</a>
      `,
    };

    await sendNodeMailer(message);

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

function deleteUserHandler(req, res) {
  const { id } = req.params;

  try {
    const user = deleteUser(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  getAllUserHandler,
  getSingleUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
