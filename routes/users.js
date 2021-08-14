import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
	{
		id: uuidv4(),
		firstName: 'Juan',
		lastName: 'Doe',
		age: 18,
	},
	{
		id: uuidv4(),
		firstName: 'Pepe',
		lastName: 'Alte',
		age: 20,
	},
];

router.get('/', (_req, res) => {
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

router.delete('/:userId', (req, res) => {
	const { userId } = req.params;

	users = users.filter(user => user.id !== userId);

	res.send(users);
});

export default router;
