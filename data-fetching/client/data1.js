import axios from "axios";
var service = axios.create({
	baseURL: "https://hacker-news.firebaseio.com/v0"
});

export async function fetchStories(state, type, skip = 0, limit = 10) {
	let ids = await service.get(`/${type}.json`).then(resp => resp.data);
	ids = ids.slice(skip, skip + limit);

	var stories = [];

	for (var i = 0; i < ids.length; i++) {
		const item = await service
			.get(`/item/${ids[i]}.json`)
			.then(resp => resp.data);
		stories.push(item);
	}

	state.set({ [type]: stories });
}
