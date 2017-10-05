import React from "react";
const Switch = ({ onChange }) => {
	return (
		<div className="switch_wrap">
			<span>No anchor</span>{" "}
			<label className="switch">
				<input type="checkbox" onChange={onChange} />
				<span className="slider" />
			</label>{" "}
			<span>With anchor</span>
		</div>
	);
};

export default Switch;
