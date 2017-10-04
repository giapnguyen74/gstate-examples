import axios from "axios";
var service = axios.create({
	baseURL: "https://hacker-news.firebaseio.com/v0"
});

export async function fetchStories(state, type, skip = 0, limit = 10) {
	let ids = await service.get(`/${type}.json`).then(resp => resp.data);
	ids = ids.slice(skip, skip + limit);

	var stories = [];
	var items = {};

	for (var i = 0; i < ids.length; i++) {
		let item = state.get(["items", ids[i]]);
		if (!item) {
			item = await service
				.get(`/item/${ids[i]}.json`)
				.then(resp => resp.data);
		}
		items[ids[i]] = item; // anchor it
		stories.push(item);
	}

	state.set({ items, [type]: stories });
}
