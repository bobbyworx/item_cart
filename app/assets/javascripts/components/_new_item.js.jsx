var NewItem= React.createClass({ 
  render() {
    return ( 
      <div> 
        <input ref='name' placeholder='Enter the name of the item' />
        <input ref='description' placeholder='Enter a description' /> 
        <button onClick={this.handleClick}>Submit</button> 
      </div> 
    )
  },

  handleClick() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: { item: {name: name, description: description}},
      success: function(data){
        debugger
        this.props.handleSubmit(data);  
      }.bind(this)
    })
    console.log('The name value is ' + name + 'the description value is ' + description);
  }

});
