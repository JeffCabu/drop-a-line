import React, { Component } from 'react'

import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import LineInfo from './LineInfo'

class LetterContainer extends Component {
  state = {
    post: undefined,
    comments: undefined,
    text: undefined
  }

  componentDidMount () {
    const postId = this.props.match.params.postId
    this.loadLetter(postId)
  }

  loadLetter = (id) => {
    $.ajax({
      url: `/api/posts/${id}`,
      method: 'GET'
    }).done((response) => {
      this.setState({post: response.post, comments: response.post.comments})
    })
  }

  submitComment = (e) => {
    e.preventDefault()
    const newComment = {text: this.state.text}
    $.ajax({
      url: `/api/posts/${this.props.match.params.postId}/comments`,
      method: 'POST',
      data: newComment
    }).done((response) => {
      this.loadLetter(this.props.match.params.postId)
      this.setState({text: ''})
    })
  }

  deleteComment = (comment) => {
    $.ajax({
      url: `/api/posts/${comment._id}`,
      method: 'DELETE'
    }).done((response) => {
      console.log(response)
    })
  }
  handleOnTextChange = (e) => this.setState({text: e.target.value})

  render () {
    return (
      <div>
        {
          this.state.post
            ? <LineInfo post={this.state.post} comments={this.state.comments}
              submitComment={this.submitComment} handleOnTextChange={this.handleOnTextChange}
              text={this.state.text} deleteComment={this.deleteComment} />
            : 'Letter has not been found'
        }
      </div>
    )
  }
}

export default withRouter(LetterContainer)
