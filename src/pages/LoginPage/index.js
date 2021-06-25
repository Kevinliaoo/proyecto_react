import React from 'react';

import axios from 'axios';

const LoginPage = (props) => {
	const [form, setForm] = React.useState({});

	const user = 'Kevin';
	const pass = 'Kevin';
	const jwt = 'mfekvdfnewfnvkbfdvnadnjkwdkcndvjdwnafkns';

	const change = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const submit = (e) => {
		e.preventDefault();

		if (form.username === user && form.password === pass) {
			window.localStorage.setItem('JWT', jwt);
			props.history.push('/');
		}

		// axios
		// 	.post('/login', form)
		// 	.then((res) => {
		// 		console.log(res);
		// 	})
		// 	.catch((e) => {
		// 		console.log(e);
		// 	});
	};

	return (
		<form onSubmit={submit}>
			<input onChange={change} placeholder="username" name="username" />
			<input onChange={change} type="password" name="password" />
			<button type="submit"></button>
		</form>
	);
};

export default LoginPage;
