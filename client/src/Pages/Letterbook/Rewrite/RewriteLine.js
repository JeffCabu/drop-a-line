import React, { Component } from 'react'
import PropTypes from 'prop-types'

import RewriteForm from './RewriteForm'

import $ from 'jquery'
import {
  withRouter
} from 'react-router-dom'

class RewriteLine extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  state = {
    userName: undefined,
    message: undefined,
    img: undefined,
    loading: true
  }

  componentDidMount () {
    this.loadPostFromServer()
  }
  onUserNameChange = (e) => this.setState({userName: e.target.value})
  onMessageChange = (e) => this.setState({message: e.target.value})
  onImgChange = (e) => this.setState({img: e.target.value})

  loadPostFromServer = (e) => {
    $.ajax({
      url: `/api/posts/${this.props.match.params.postId}`,
      method: 'GET'
    }).done((response) => {
      const {userName, img, message} = response.post
      this.setState({
        userName,
        message,
        img,
        loading: false
      })
    })
  }

  submitPostToServer = (e) => {
    e.preventDefault()
    const {userName, img, message} = this.state
    const post = {userName, img, message}
    console.log('Post Edit', post)
    $.ajax({
      url: `/api/posts/${this.props.match.params.postId}`,
      method: 'PUT',
      data: post
    }).done((response) => {
      console.log('RES from PUT', response)
      alert(`Post ${response.post.userName} has been updated`)
      this.props.history.push(`/post/${response.post._id}`)
    })
  }
  render () {
    const {userName, img, message} = this.state
    return (
      <div>
        {
          !this.state.loading
            ? <RewriteForm
              userName={userName}
              img={img}
              message={message}
              onImgChange={this.onImgChange}
              onUserNameChange={this.onUserNameChange}
              onMessageChange={this.onMessageChange}
              submitPostToServer={this.submitPostToServer}
            />
            : <h2> Loading . . . </h2>
        }
      </div>
    )
  }
}

export default withRouter(RewriteLine)
