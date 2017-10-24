import React, { Component } from 'react';

class Story extends Component {

  handleClick = () => {
    this.props.onClick(this.props.story.id)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.story.id)
  }

  render () {
   return(
     <div className='tile'>
       <span className='deleteButton' onClick={this.handleDelete}>X</span>
       <h4 onClick={this.handleClick}>{this.props.story.title}</h4>
       <p onClick={this.handleClick}>{this.props.story.body}</p>
     </div>
   )
  }
}
export default Story
