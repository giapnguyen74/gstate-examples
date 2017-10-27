import gstate from "../../bindings/react-gstate";
import React from "react";

const fieldOpts = (state, name) => {
	return {
		value: state.get(name) || "",
		onChange: evt => state.set(name, evt.target.value)
	};
};

const Form = gstate(props => {
	const state = props.state;
	const a = state.get("a");
	return (
		<div>
			Test: {JSON.stringify(a)}
			<p>
				<input type="text" {...fieldOpts(state, "a.input1")} />
			</p>
			<p>
				<input type="text" {...fieldOpts(state, "a.input2")} />
			</p>
			<p>
				<input type="text" {...fieldOpts(state, "a.input3")} />
			</p>
		</div>
	);
});

export default Form;
