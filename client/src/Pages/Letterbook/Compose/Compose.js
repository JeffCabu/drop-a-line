import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComposeForm from './ComposeForm'

import $ from 'jquery'
import {
  withRouter
} from 'react-router-dom'

class Compose extends Component {
  state = {
    userName: undefined,
    img: undefined,
    message: undefined,
    comments: undefined
  }

  static propTypes = {
    loadPostsFromServer: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }

  onChangeHandler = (e) => this.setState({[e.target.id]: e.target.value})

  handleSubmit = (e) => {
    e.preventDefault()
    const {userName, img, message, comments} = this.state
    const post = {userName, img, message, comments}
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: post
    }).done((response) => {
      this.props.loadPostsFromServer()
      this.props.history.push('/posts')
    })
  }

  render () {
    return (
      <div>
        <h3>Drop a Line</h3>
        <ComposeForm
          onChangeHandler={this.onChangeHandler}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default withRouter(Compose)
