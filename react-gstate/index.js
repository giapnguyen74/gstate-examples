import React from "react";

const gstate = (query, renderer, options = {}) => {
	class Renderer extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				data: undefined
			};

			if (!props.state) {
				throw new Error(
					"Could not find state in props of gstate component. Please explicitly pass state as a prop to gstate component."
				);
			}
		}

		refech() {
			this._watcher && this._watcher();
			this._watcher = this.props.state.watch(query, data => {
				this.setState({
					data: data
				});
			});
		}

		componentDidMount() {
			options.mounted && options.mounted.call(this);
			this.refech();
		}

		componentWillUnmount() {
			this._watcher && this._watcher();
		}

		render() {
			return renderer(this.props, this.state.data, this);
		}
	}
	return Renderer;
};

export default gstate;
