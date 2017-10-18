import React, { Component } from 'react'
import axios from 'axios'

class StoriesContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        stories: []
      }
    }

    componentDidMount() {
      axios.get('http://localhost:9191/api/v1/stories.json')
        .then(response => {
          console.log(response)
          this.setState({stories: response.data})
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="">
              Stories
            </div>
        );
    }
}

export default StoriesContainer
