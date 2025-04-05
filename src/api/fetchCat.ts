type CatApiResponse = {
	url: string;
}[];

export async function fetchCat(): Promise<string> {
	try {
		const response = await fetch('https://api.thecatapi.com/v1/images/search', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': import.meta.env.VITE_API_KEY,
			},
		});

		const data: CatApiResponse = await response.json();
		return data[0].url;
	} catch (err) {
		throw new Error('Ошибка загрузки кота');
	}
}
