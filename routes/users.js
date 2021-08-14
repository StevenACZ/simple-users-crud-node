import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [];

router.get('/', (req, res) => {
	console.log(users);

	res.send(users);
});

router.post('/', (req, res) => {
	const newUser = {
		id: uuidv4(),
		...req.body,
	};

	// New user added
	users.push(newUser);

	res.send(`User with the name ${newUser.firstName} added to the database!`);
});

router.get('/:userId', (req, res) => {
	const { userId } = req.params;

	const foundUser = users.find(user => user.id === userId);

	res.send(foundUser);
});

export default router;
