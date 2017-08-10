var Body = React.createClass({
  getInitialState() { 
    return { items: [] } 
  },

  componentDidMount(){
    var _this = this; 
    $.getJSON('/api/v1/items.json', function (response) {
      _this.setState({ 
        items: response
      });
    });
  },

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({items: newState});
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/items/${id}`,
      type: 'DELETE', 
      success: function (){
        this.removeItemClient(id);
      }.bind(this)
    });
  },

  handleUpdate(item) {
    $.ajax({
      url: '/api/v1/items/${item.id}',
      type: 'PUT',
      data: { item: item },
      success: () => { console.log('you did it!!!'); //this.updateItems(item); // callback to swap objects } } )}, 
      }
    })
  },

  removeItemClient(id) {
    debugger
    var newItems = this.state.items.filter(function (item) {
      return item.id != id;
    });

    // ES6
    // var newItems = this.state.items.filter((item) => {
    //   return item.id != id;
    // });

    this.setState({ items: newItems });
  },

  render() {
    return ( 
      <div> 
        <NewItem handleSubmit={this.handleSubmit} />
        <AllItems items={this.state.items} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
      </div> 
      ) 
    } 
  });
