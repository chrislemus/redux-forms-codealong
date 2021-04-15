import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  state = {
    text: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input
              type="text"
              value={this.state.text}
              onChange={({ target }) => this.setState({ text: target.value })}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({ type: 'ADD_TODO', payload: formData }),
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
