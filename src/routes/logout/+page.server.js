import {redirect} from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		event.cookies.delete('token');
		event.locals.username = null;

		throw redirect(303, '/');
	}
}
