import jwt from 'jsonwebtoken';

export async function handle({ event, resolve }) {
	const token = event.cookies.get('token');
	
	if (token == undefined) {
		return await resolve(event);
	}
	
	try {
		event.locals.username = jwt.verify(token, 'very_secret_key').username;
	} catch(error) {
		console.log(error);
	}

	const response = await resolve(event);
	return response;
}
