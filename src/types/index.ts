
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
		language: string,
		ratingsCount: number,
		averageRating: number,
		mainCategory: string,
	},
	saleInfo: {
		listPrice: {
			amount: number,
			currencyCode: string
		}
	}
}

export type fetchResponse = {
	totalItems: number,
	items: book[]
}
