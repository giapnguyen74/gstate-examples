import axios from "axios";
var service = axios.create({
	baseURL: "https://hacker-news.firebaseio.com/v0"
});

async function fetchItem(state, id) {
	let item = state.get(["items", id]);
	if (!item) {
		service
			.get(`/item/${id}.json`)
			.then(resp => resp.data)
			.then(item => {
				state.set({
					items: {
						[id]: item
					}
				});
			});
	}
}

export async function fetchStories(state, type, skip = 0, limit = 10) {
	let ids = await service.get(`/${type}.json`).then(resp => resp.data);
	ids = ids.slice(skip, skip + limit);

	var stories = [];
	var items = {};

	for (var i = 0; i < ids.length; i++) {
		fetchItem(state, ids[i]);
		const item = {
			id: ids[i]
		};
		items[ids[i]] = item; // anchor it
		stories.push(item);
	}

	state.set({ items, [type]: stories });
}
