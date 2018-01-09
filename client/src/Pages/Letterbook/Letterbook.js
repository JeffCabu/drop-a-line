import React from 'react'
import PropTypes from 'prop-types'
import LineCard from './LineCard'

const style = {
  container: {
    // background: 'url(https://thebainreport.com/wp-content/uploads/2014/03/5-wrinkled-parchment-paper1.jpg)no-repeat center center fixed',
    // backgroundSize: 'cover',
    width: '100%'
  }
}
const Letterbook = ({posts, deletePost}) => {
  return (
    <div style={style.container}>
      <p>something in the posts</p>
      {
        posts.map((post, key) => {
          return (
            <LineCard
              post={post}
              key={key}
              deletePost={deletePost}
            />
          )
        })
      }
    </div>
  )
}

Letterbook.propTypes = {
  posts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default Letterbook
