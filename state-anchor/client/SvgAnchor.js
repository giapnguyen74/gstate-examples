import React from "react";
import gstate from "./gstate";
const SvgAnchor = ({ x, y, state, value, isAnchor }) => {
	return (
		<g>
			<svg x={x} y={y} width="150" height="80">
				<text x="10" y="15" className="input_title">
					box: {state.key ? state.key : "Archor"}
				</text>
				<text x="10" y="35" className="input_title">
					value: {value}
				</text>
			</svg>
			{isAnchor && (
				<g>
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
			)}
		</g>
	);
};

export default gstate(
	{
		item: {
			value: 1
		},
		anchor: 1
	},
	(props, data) => {
		const value = data.item ? data.item.value : undefined;
		const isAnchor = data.anchor || false;

		return <SvgAnchor {...props} value={value} isAnchor={isAnchor} />;
	}
);
