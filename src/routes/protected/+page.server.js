import { redirect } from '@sveltejs/kit';

export function load(event) {
	if ( event.locals.username == null ) {
		throw redirect(303, '/');
	}
}
