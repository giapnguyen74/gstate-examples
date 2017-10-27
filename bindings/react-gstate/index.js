import React from "react";

const gstate = (query, renderer) => {
	class Renderer extends React.Component {
		constructor(props) {
			super(props);

			if (!props.state) {
				throw new Error(
					"Could not find state in props of gstate component. Please explicitly pass state as a prop to gstate component."
				);
			}

			this._view = null;

			this.state = {
				data: undefined
			};
		}

		refech() {
			this._watcher && this._watcher();
			if (typeof query == "function") {
				this._watcher = this.props.state.watch(
					() => query(this.props, this),
					view => {
						this._view = view || null;
						this.setState({});
					}
				);
			} else {
				this._watcher = this.props.state.watch(query, data =>
					this.setState({
						data: data
					})
				);
			}
		}

		componentDidMount() {
			this.refech();
		}

		componentWillUnmount() {
			this._watcher && this._watcher();
		}

		render() {
			return typeof query == "function"
				? this._view
				: renderer(this.props, this.state.data, this);
		}
	}
	return Renderer;
};

export default gstate;
