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
	console.log('POST ROUTE REACHED');

	res.send({
		error: 'false',
		data: req.body,
	});
});

export default router;
