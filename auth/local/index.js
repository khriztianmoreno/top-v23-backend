const { Router } = require('express');

const {
  loginUserHandler,
  changePasswordHandler,
  forgotPasswordHandler,
  veryfyAccountHandler,
} = require('./local.controller');

const router = Router();

router.post('/login', loginUserHandler);
// router.post('/change-password', changePasswordHandler);
// router.post('/forgot-password', forgotPasswordHandler);
router.get('/verify-account/:token', veryfyAccountHandler);

module.exports = router;
