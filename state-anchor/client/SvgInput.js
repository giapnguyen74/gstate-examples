import React from "react";
import gstate from "./gstate";
import { updateText, updateTextWithAnchor } from "./inputModule";
const SvgInput = ({ x, y, state, value, isAnchor }) => {
	const onChange = evt => {
		if (isAnchor) {
			updateTextWithAnchor(state, evt.target.value);
		} else {
			updateText(state, evt.target.value);
		}
	};
	return (
		<svg x={x} y={y} width="150" height="80">
			<foreignObject x="12" y="5">
				<input
					style={{
						display:
							!state.key || state.key.length == 0
								? "none"
								: "block"
					}}
					type="text"
					value={value}
					onChange={onChange}
				/>
			</foreignObject>

			<text x="10" y="45" className="input_title">
				box: {state.key ? state.key : "Archor"}
			</text>
			<text x="10" y="65" className="input_title">
				value: {value}
			</text>
		</svg>
	);
};
export default gstate(
	{
		item: {
			value: 1
		},
		"#": {
			anchor: 1
		}
	},
	(props, data) => {
		const value = data.item ? data.item.value : undefined;
		const isAnchor = data["#"] ? data["#"].anchor : false;

		return <SvgInput {...props} value={value} isAnchor={isAnchor} />;
	}
);
