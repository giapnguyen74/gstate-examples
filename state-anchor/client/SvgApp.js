import React from "react";
import SvgInput from "./SvgInput";
import SwitchInput from "./Switch";
const SvgApp = ({ state }) => {
	const input1 = state.path("input1");
	const input2 = state.path("input2");
	const input3 = state.path("input3");
	const input4 = state.path("input4");

	const onChange = evt => {
		const archor = state.get("archor");
		state.set({
			archor: !archor
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
					<SvgInput x="227" y="174" state={state} />
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

					<path
						fill="#000000"
						fillOpacity="0.0"
						d="m165.0 143.00787l148.0 30.992126"
						fillRule="evenodd"
					/>
					<path
						stroke="#0000ff"
						strokeWidth="2.0"
						strokeLinejoin="round"
						strokeLinecap="butt"
						d="m172.41908 144.56148l133.16182 27.884918"
						fillRule="evenodd"
					/>
					<path
						fill="#0000ff"
						stroke="#0000ff"
						strokeWidth="2.0"
						strokeLinecap="butt"
						d="m165.97878 143.21283c0.372406 -1.7784424 2.1160278 -2.9182434 3.8944702 -2.5458221c1.7784424 0.372406 2.9182434 2.1160278 2.5458374 3.8944702c-0.37242126 1.7784424 -2.116043 2.9182434 -3.8944855 2.5458374c-1.7784424 -0.37242126 -2.9182434 -2.116043 -2.5458221 -3.8944855z"
						fillRule="nonzero"
					/>
					<path
						fill="#0000ff"
						stroke="#0000ff"
						strokeWidth="2.0"
						strokeLinecap="butt"
						d="m312.02124 173.79504c-0.37243652 1.7784424 -2.1160278 2.9182434 -3.8944702 2.5458221c-1.7784424 -0.372406 -2.918274 -2.1160278 -2.5458374 -3.8944702c0.372406 -1.7784424 2.1160278 -2.9182434 3.8944702 -2.5458374c1.7784424 0.37242126 2.9182434 2.116043 2.5458374 3.8944855z"
						fillRule="nonzero"
					/>
					<path
						fill="#000000"
						fillOpacity="0.0"
						d="m443.0 143.00787l-129.98425 30.992126"
						fillRule="evenodd"
					/>
					<path
						stroke="#0000ff"
						strokeWidth="2.0"
						strokeLinejoin="round"
						strokeLinecap="butt"
						d="m435.62668 144.76588l-115.23761 27.476105"
						fillRule="evenodd"
					/>
					<path
						fill="#0000ff"
						stroke="#0000ff"
						strokeWidth="2.0"
						strokeLinecap="butt"
						d="m442.02725 143.2398c0.42144775 1.7674713 -0.6697693 3.541916 -2.4372253 3.9633331c-1.7674866 0.42141724 -3.5419312 -0.6697693 -3.9633484 -2.4372406c-0.42141724 -1.7674866 0.6697693 -3.5419312 2.4372559 -3.9633484c1.767456 -0.42141724 3.5419006 0.66978455 3.9633179 2.4372559z"
						fillRule="nonzero"
					/>
					<path
						fill="#0000ff"
						stroke="#0000ff"
						strokeWidth="2.0"
						strokeLinecap="butt"
						d="m313.9885 173.76807c-0.42141724 -1.7674713 0.6697693 -3.541916 2.4372253 -3.9633331c1.7674866 -0.42141724 3.5419312 0.6697693 3.9633484 2.4372559c0.42141724 1.7674713 -0.6697693 3.541916 -2.4372559 3.9633331c-1.767456 0.42141724 -3.5419006 -0.66978455 -3.9633179 -2.4372559z"
						fillRule="nonzero"
					/>
					<path
						fill="#000000"
						fillOpacity="0.0"
						d="m165.0 290.0l148.0 -30.992126"
						fillRule="evenodd"
					/>
					<path
						stroke="#0000ff"
						strokeWidth="2.0"
						strokeLinejoin="round"
						strokeLinecap="butt"
						d="m172.41908 288.4464l133.16182 -27.884949"
						fillRule="evenodd"
					/>
					<path
						fill="#0000ff"
						stroke="#0000ff"
						strokeWidth="2.0"
						strokeLinecap="butt"
						d="m165.97878 289.79504c-0.37242126 -1.7784424 0.76737976 -3.5220642 2.5458221 -3.8944702c1.7784424 -0.37243652 3.5220642 0.767395 3.8944855 2.5458374c0.372406 1.7784424 -0.767395 3.5220337 -2.5458374 3.8944702c-1.7784424 0.372406 -3.5220642 -0.767395 -3.8944702 -2.5458374z"
						fillRule="nonzero"
					/>
					<path
						fill="#0000ff"
						stroke="#0000ff"
						strokeWidth="2.0"
						strokeLinecap="butt"
						d="m312.02124 259.21283c0.372406 1.7784424 -0.767395 3.5220642 -2.5458374 3.8944702c-1.7784424 0.37243652 -3.5220642 -0.767395 -3.8944702 -2.5458374c-0.37243652 -1.7784424 0.767395 -3.5220337 2.5458374 -3.8944702c1.7784424 -0.372406 3.5220337 0.767395 3.8944702 2.5458374z"
						fillRule="nonzero"
					/>
					<path
						fill="#000000"
						fillOpacity="0.0"
						d="m443.0 290.0l-130.01575 -30.992126"
						fillRule="evenodd"
					/>
					<path
						stroke="#0000ff"
						strokeWidth="2.0"
						strokeLinejoin="round"
						strokeLinecap="butt"
						d="m435.6266 288.2424l-115.26892 -27.476929"
						fillRule="evenodd"
					/>
					<path
						fill="#0000ff"
						stroke="#0000ff"
						strokeWidth="2.0"
						strokeLinecap="butt"
						d="m442.02725 289.76813c-0.42132568 1.7674866 -2.1957092 2.8587952 -3.9631958 2.4374695c-1.7674866 -0.42132568 -2.8587952 -2.1957092 -2.4374695 -3.9632263c0.42132568 -1.7674866 2.1957092 -2.8587646 3.9631958 -2.437439c1.7675171 0.42132568 2.8587952 2.1957092 2.4374695 3.9631958z"
						fillRule="nonzero"
					/>
					<path
						fill="#0000ff"
						stroke="#0000ff"
						strokeWidth="2.0"
						strokeLinecap="butt"
						d="m313.957 259.23975c0.42132568 -1.7674866 2.1957092 -2.8587952 3.9631958 -2.4374695c1.7674866 0.42132568 2.8587952 2.1957092 2.4374695 3.9632263c-0.42132568 1.7674866 -2.1957092 2.8587646 -3.9631958 2.437439c-1.7675171 -0.42132568 -2.8587952 -2.1957092 -2.4374695 -3.9631958z"
						fillRule="nonzero"
					/>
				</g>
			</svg>
		</div>
	);
};

export default SvgApp;
