
export type book = {
	id: string,
	volumeInfo: {
		title: string,
		authors: string[],
		publisher: string,
		publishedDate: string,
		description: string,
		categories: string[],
		maturityRating: string,
		imageLinks: {
			smallThumbnail: string,
			thumbnail: string
		},
		language: string
	},
}

export type fetchResponse = {
	totalItems: number,
	items: book[]
}
