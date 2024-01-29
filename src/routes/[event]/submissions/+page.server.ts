import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params, fetch}) => {
	let event: any;
	await fetch('https://platform.modfest.net/event/' + params.event)
		.then((response: any) => response.json())
		.then((data: any) => {
			event = data;
		})
		.catch((error: any) => {
			return null;
		});

	if (event === null) {
		return {
			status: 404
		};
	}

	let submissions: any;
	await fetch('https://platform.modfest.net/submissions')
		.then((response: any) => response.json())
		.then((data: any) => {
			submissions = data.filter((submission: any) => {
				// Check if there exists a participant in the event with the submission id
				return Object.values(event.participants).some((participant: any) => {
					return participant.submissions.includes(submission.id);
				});
			});
		})
		.catch((error: any) => {
			return [];
		});

	let users: any;
	await fetch('https://platform.modfest.net/users?map')
		.then((response: any) => response.json())
		.then((data: any) => {
			users = data;
		})
		.catch((error: any) => {
			return [];
		});

	if (submissions.length > 0) {
		return {
			event,
			submissions,
			users
		};
	}

	return {
		status: 404
	};
};