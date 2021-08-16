import express from 'express';

import { createUser } from '../controllers/users.js';
import { getUsers } from '../controllers/users.js';
import { getUserById } from '../controllers/users.js';
import { deleteUserById } from '../controllers/users.js';
import { updateUserById } from '../controllers/users.js';

const router = express.Router();

// {{URL}}/users
router.route('/').get(getUsers).post(createUser);

// {{URL}}/users/:userId
router
	.route('/:userId')
	.get(getUserById)
	.delete(deleteUserById)
	.patch(updateUserById);

export default router;
