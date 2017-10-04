import React from "react";
const Switch = ({ onChange }) => {
	return (
		<div className="switch_wrap">
			<span>No archor</span>{" "}
			<label className="switch">
				<input type="checkbox" onChange={onChange} />
				<span className="slider" />
			</label>{" "}
			<span>Archor</span>
		</div>
	);
};

export default Switch;
