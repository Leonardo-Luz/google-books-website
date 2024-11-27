// NOTE: THATS AN API PLACEHOLDER AND WILL BE CHANGED LATER!!!

const apiRoute = `${import.meta.env.VITE_API_URL}/posts`

export const getPosts = async () =>
	fetch(apiRoute, {
		method: 'GET'
	})

export const getPostById = async (id: number) =>
	fetch(`${apiRoute}/${id}`, {
		method: 'GET'
	})

