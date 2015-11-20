
(function(){

	var List = React.createClass({
		propTypes: {
			list: React.PropTypes.shape({
				id: React.PropTypes.number.isRequired,
				status: React.PropTypes.bool.isRequired
			}),
			onChangeStatus: React.PropTypes.func.isRequired
		},
		_onChangeStatus(){
			this.props.onChangeStatus(this.props.list.id);
		},
		render(){
			return (
				<a href="javascript:void(0);" onClick={this._onChangeStatus}>スイッチ</a>
			);
		}
	});

	var Component = React.createClass({
		getInitialState(){
			var count = 0;
			var max = 0;
			var lists = [];

			this.props.lists.map((list) => {
				var status = (list == 1);
				lists.push({id:max, status:status});
				if (status){ count++; }
				max++;
			});

			return {
				count: count,
				max: max,
				lists: lists
			};
			
			// ここで updateCount() しても反映されない
		},
		changeStatus(id){
			var lists = this.state.lists;
			lists[id].status = ! lists[id].status;
			this.setState({
				lists: lists
			});
			this.updateCount();
		},
		updateCount(){
			var count = 0;
			var max = 0;
			var lists = this.state.lists.map((list) => {
				if (list.status){ count++; }
				max++;
			});
			this.setState({
				count: count,
				max: max
			});
		},
		render(){
			var lists = this.state.lists.map((list) => {
				var className = '';
				if (list.status){ className='is-selected'; }
				return (
					<li key={list.id} className={className}><List onChangeStatus={this.changeStatus} list={list} /></li>
				);
			});
			return (
				<div className="switch-count">
					<p className="count"><span onClick={this.inclementCount}>{this.state.count}</span>/<span>{this.state.max}</span></p>
					<ul className="switch">{lists}</ul>
				</div>
			);
		}
	});

	var Training = React.createClass({
		render: function(){
			var components = this.props.data.map(function(lists, i){
				return (
					<Component key={i} lists={lists} />
				);
			});
			return (
				<div>
					{components}
				</div>
			);
		}
	});

	var data = [[0,1,0,1], [1,0,1,0], [1,1,1], [0,0,0]];
	React.render(<Training data={data} />, document.getElementById('react'))

}());

