import jwt from 'jsonwebtoken';
import {redirect} from '@sveltejs/kit';

export const actions = {
	default: async ({ cookies, request }) => {
		const correctUsername = 'helloworld';
		const correctPassword = '123';
		const jwtKey = 'very_secret_key';

		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		
		if (!username == correctUsername) {
			return;
		}

		if (!password == correctPassword) {
			return;
		}
		
		const token = jwt.sign({
			username: username,
			iat: Math.floor(Date.now() / 1000)
		}, jwtKey)
		
		cookies.set('token', token, {
			httpOnly: true,
			secure: true
		})

		throw redirect(303, '/');
	}
};
