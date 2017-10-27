import App from "./App";
import gstate from "../../bindings/react-gstate";
import React from "react";

const Item = ({ item = {} }) => {
	return <li>{item.title ? item.title : <div className="loader" />}</li>;
};

const Stories = ({ items = [], loading }) => {
	return (
		<App>
			{loading == true && <div className="loader" />}
			<ol>{items.map(item => <Item key={item.id} item={item} />)}</ol>
		</App>
	);
};

export const stories = type => {
	return gstate(
		{
			[type]: {
				_: 1
			}
		},
		(props, data = {}) => {
			return <Stories items={data[type]} loading={props.loading} />;
		}
	);
};

export const NotFound = () => {
	return (
		<App>
			<div>NotFound</div>
		</App>
	);
};
