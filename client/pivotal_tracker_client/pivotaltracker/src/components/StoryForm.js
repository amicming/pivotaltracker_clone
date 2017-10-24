import React, { Component } from 'react'
import axios from 'axios'

class StoryForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.story.title,
      body: this.props.body
    }
  }

  handleInput = (e) => {
    this.props.resetNotification()
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  }

  handleBlur = () => {
    const story = {title: this.state.title, body: this.state.body}
    axios.put(
      `http://localhost:9191/api/v1/stories/${this.props.story.id}`,
      {story: story}
    )
    .then(response => {
      console.log(response)
      this.props.updateStory(response.data)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className='tile'>
        <form onBlur={this.handleBlur}>
          <input className='input' type='text' name='title' placeholder='Enter a Title'
            value={this.state.title} onChange={this.handleInput}
            ref={this.props.titleRef} />
          <textarea className='input' name='body' placeholder='Describe your story'
            value={this.state.body} onChange={this.handleInput}></textarea>
        </form>
      </div>
    );
  }
}

export default StoryForm
