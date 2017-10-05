export function updateText(state, value) {
	//clear archor
	state.set({
		item: undefined
	});

	state.set({
		item: {
			value
		}
	});
}

export function updateTextWithAnchor(state, value) {
	const item = {
		value
	};
	state.set({
		"#": {
			item: item
		},
		item: item
	});
}
