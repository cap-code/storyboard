import React, { Component } from 'react'

export class CreateCollection extends Component {
    state = {
        title: '',
        description: ''
      }
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
      }
    render() {
        return (
<div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create Collection</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id='title' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="description">Description</label>
            <textarea id='description' class="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn white lighten-1 black-text">Create</button>
          </div>
        </form>
      </div>            
        )
    }
}

export default CreateCollection
