import { v4 as uuidv4 } from 'uuid';

let users = [];

export const updateUserById = (req, res) => {
	const { userId } = req.params;
	const { firstName, lastName, age } = req.body;

	const user = users.find(user => user.id === userId);

	if (firstName) user.firstName = firstName;
	if (lastName) user.lastName = lastName;
	if (age) user.age = age;

	users = users.filter(user => user.id !== userId);

	users.push(user);

	res.send({
		error: false,
		data: user,
	});
};

export const deleteUserById = (req, res) => {
	const { userId } = req.params;

	users = users.filter(user => user.id !== userId);

	res.send(users);
};

export const getUserById = (req, res) => {
	const { userId } = req.params;

	const foundUser = users.find(user => user.id === userId);

	res.send(foundUser);
};

export const getUsers = (_req, res) => {
	res.send(users);
};

export const createUser = (req, res) => {
	const newUser = {
		id: uuidv4(),
		...req.body,
	};

	// New user added
	users.push(newUser);

	res.send(`User with the name ${newUser.firstName} added to the database!`);
};
