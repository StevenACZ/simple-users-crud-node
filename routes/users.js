import express from 'express';

const router = express.Router();

const users = [
	{
		firstName: 'John',
		lastName: 'Doe',
		age: 25,
	},
	{
		firstName: 'Jane',
		lastName: 'Doe',
		age: 23,
	},
];

router.get('/', (req, res) => {
	console.log(users);

	res.send(users);
});

router.post('/', (req, res) => {
	const newUser = req.body;

	// New user added
	users.push(newUser);

	res.send(`User with the name ${newUser.firstName} added to the database!`);
});

export default router;
