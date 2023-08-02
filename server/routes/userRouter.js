const router = require('express').Router();

const {
  getUsers, getUser, updateUser, updateUserAvatar,
} = require('../controllers/user');

router.get('/', getUsers);

router.get('/me', getUser);

router.patch('/me/avatar',updateUserAvatar);

router.patch('/me', updateUser);

const userRouter = router;
module.exports = userRouter;
