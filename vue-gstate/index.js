module.exports = function(Vue) {
	Object.defineProperty(Vue.prototype, "$query", {
		get() {
			return this._query;
		}
	});

	Vue.mixin({
		beforeCreate() {
			if (this.$options.gstate) {
				Vue.util.defineReactive(this, "_query", {
					data: this.$options.gstate.data
				});
				this._query.query = this.$options.gstate.query;
				this._query.stop = () => {
					this.__watcher && this.__watcher();
				};

				this._query.refetch = () => {
					if (!this._query.query) return;
					this.__watcher && this.__watcher();
					this.__watcher = this.state.watch(
						this._query.query,
						data => {
							this._query.data = data;
						}
					);
				};
			}
		},
		mounted() {
			if (this._query) {
				if (!this.state) {
					throw new Error(
						"Could not find state in props of gstate component. Please explicitly pass state as a prop to gstate component."
					);
				}

				this._query.refetch();
			}
		},
		beforeDestroy() {
			this._query && this._query.stop();
		}
	});
};
