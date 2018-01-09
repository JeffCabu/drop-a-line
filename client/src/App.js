import React, { Component } from 'react'

import Letterbook from './Pages/Letterbook/Letterbook'
import LetterContainer from './Pages/Letterbook/LetterContainer'
import Compose from './Pages/Letterbook/Compose/Compose'
import RewriteLine from './Pages/Letterbook/Rewrite/RewriteLine'

import Footer from './Components/Footer'
import Home from './Pages/Home/Home'
import Nav from './Components/Nav'
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const style = {
  page: {
    background: 'url(https://thebainreport.com/wp-content/uploads/2014/03/5-wrinkled-parchment-paper1.jpg)no-repeat center center fixed',
    backgroundSize: 'cover',
    width: '98vw',
    height: '100% !important',
    fontFamily: 'Aladin cursive'
    // border: '10px solid red'
  }
}

export class App extends Component {
  state = {
    posts: undefined
  }

  componentDidMount () {
    this.loadPostsFromServer()
  }

  loadPostsFromServer = () => {
    $.ajax({
      url: '/api/posts',
      method: 'GET'
    }).done((response) => {
      console.log(response)
      this.setState({posts: response.post})
    })
  }

  deletePost = (post) => {
    $.ajax({
      url: `/api/posts/${post._id}`,
      method: 'DELETE'
    }).done((response) => {
      this.loadPostsFromServer()
    })
  }

  render () {
    return (
      <Router>
        <div style={style.page}>
          <Nav />
          <Route exact path='/' component={Home} />

          <Route path='/post/:postId' render={() => <LetterContainer />} />

          <Route path='/compose' render={() => <Compose loadPostsFromServer={this.loadPostsFromServer} />} />
          <Route path='/edit-line/:postId' render={() => <RewriteLine />} />

          {
            this.state.posts
              ? <Route path='/letterbook' render={() => <Letterbook posts={this.state.posts} deletePost={this.deletePost} />} />
              : 'No Posts'
          }
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
