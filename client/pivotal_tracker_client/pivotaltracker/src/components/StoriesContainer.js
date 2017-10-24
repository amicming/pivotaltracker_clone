import React, { Component } from 'react'
import axios from 'axios'
import Story from './Story'
import StoryForm from './StoryForm'
import update from 'immutability-helper'
import Notification from './Notification'

class StoriesContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        stories: [],
        editingStoryId: null,
        notification: '',
        transitionIn: false
      }
    }

    componentDidMount() {
      axios.get('http://localhost:9191/api/v1/stories.json')
        .then(response => {
          this.setState({stories: response.data})
        })
        .catch(error => console.log(error))
    }
    addNewStory = () => {
      axios.post('http://localhost:9191/api/v1/stories',{story: {title: '', body: ''}})
        .then(response => {
          // this.setState({stories: response.data})
          console.log(response)
          const stories = update(this.state.stories, {$splice: [[0,0, response.data]]})
          this.setState({stories: stories, editingStoryId: response.data.id})
        })
        .catch(error => console.log(error))
    }

    updateStory = (story) => {
      const storyIndex = this.state.stories.findIndex(x => x.id === story.id)
      const stories = update(this.state.stories, {[storyIndex]: {$set: story}})
      this.setState({stories: stories, notification: 'All changes saved', transitionIn: true})
    }

    deleteStory = (id) => {
      axios.delete(`http://localhost:9191/api/v1/stories/${id}`)
      .then(response => {
        const storyIndex = this.state.stories.findIndex(x => x.id === id)
        const stories = update(this.state.stories, {$splice: [[storyIndex, 1]]})
        this.setState({stories: stories})
      })
    }

    resetNotification = () => {this.setState({notification: '', transitionIn: false})}

    enableEditing = (id) => {
      this.setState({editingStoryId: id}, () => {this.title.focus()})
    }

    render() {
        return (
            <div>
              <div>
                <button className='newStoryBtn' onClick={this.addNewStory}>
                  New Story
                </button>
                <Notification in={this.state.transitionIn} notification={this.state.notification} />
              </div>
              {this.state.stories.map((story) => {
                if(this.state.editingStoryId === story.id) {
                  return(<StoryForm story={story} key={story.id} updateStory={this.updateStory}
                      titleRef={input => this.title = input }
                      resetNotification={this.resetNotification} />)
                } else {
                  return(<Story story={story} key={story.id} onClick={this.enableEditing}
                      onDelete={this.deleteStory} />)
                }

              })}
            </div>
        );
    }
}

export default StoriesContainer
