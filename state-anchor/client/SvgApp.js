import React from "react";
import SvgInput from "./SvgInput";
import SwitchInput from "./Switch";
import SvgAnchor from "./SvgAnchor";

const SvgApp = ({ state }) => {
	const input1 = state.path("input1");
	const input2 = state.path("input2");
	const input3 = state.path("input3");
	const input4 = state.path("input4");

	const onChange = evt => {
		const anchor = state.get("anchor");
		state.set({
			anchor: !anchor,
			input1: undefined,
			input2: undefined,
			input3: undefined,
			input4: undefined
		});
	};
	return (
		<div>
			<SwitchInput onChange={onChange} />
			<svg
				version="1.1"
				viewBox="0.0 100 720.0 540.0"
				fill="none"
				stroke="none"
				strokeLinecap="square"
				strokeMiterlimit="10"
				xmlns="http://www.w3.org/2000/svg"
				width="600"
				height="600"
			>
				<g>
					<SvgInput x="82" y="58" state={input1} />
					<SvgInput x="357" y="58" state={input2} />
					<SvgInput x="80" y="290" state={input4} />
					<SvgInput x="357" y="290" state={input3} />
					<SvgAnchor x="227" y="174" state={state} />
					<path
						stroke="#b7b7b7"
						strokeWidth="2.0"
						strokeLinejoin="round"
						strokeLinecap="butt"
						d="m79.0 58.0l172.0 0l0 85.00787l-172.0 0z"
						fillRule="evenodd"
					/>

					<path
						stroke="#ff00ff"
						strokeWidth="2.0"
						strokeLinejoin="round"
						strokeLinecap="butt"
						d="m357.0 58.0l172.0 0l0 85.00787l-172.0 0z"
						fillRule="evenodd"
					/>

					<path
						stroke="#674ea7"
						strokeWidth="2.0"
						strokeLinejoin="round"
						strokeLinecap="butt"
						d="m79.0 290.0l172.0 0l0 85.00787l-172.0 0z"
						fillRule="evenodd"
					/>

					<path
						stroke="#990000"
						strokeWidth="2.0"
						strokeLinejoin="round"
						strokeLinecap="butt"
						d="m357.0 290.0l172.0 0l0 85.00787l-172.0 0z"
						fillRule="evenodd"
					/>

					<path
						stroke="#434343"
						strokeWidth="2.0"
						strokeLinejoin="round"
						strokeLinecap="butt"
						d="m227.0 174.0l172.0 0l0 85.00787l-172.0 0z"
						fillRule="evenodd"
					/>
				</g>
			</svg>
		</div>
	);
};

export default SvgApp;
