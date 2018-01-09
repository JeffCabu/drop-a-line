import React from 'react'
import PropTypes from 'prop-types'

import CommentsList from '../../Components/Comments/CommentList'
import CommentForm from '../../Components/Comments/CommentForm'

import {
  Link
} from 'react-router-dom'

const style = {
  container: {
    // border: '2px solid red',
    color: 'blue',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh'
  },
  img: {
    width: '50%',
    height: '50%'
  }
}
const LineInfo = ({post, comments, submitComment, handleOnTextChange, text, deleteComment}) => {
  return (
    <div style={style.container}>
      <div>
        <img style={style.img} src={post.img} />
        <h3>By: {post.userName}</h3>
      </div>
      <div>
        Note: <p>{post.message}</p>
      </div>
      <div>
        <h3>Comments</h3>
        <CommentsList comments={comments} deleteComment={deleteComment} />
      </div>
      <CommentForm
        handleOnTextChange={handleOnTextChange}
        text={text}
        submitComment={submitComment}
      />
      <div>
        <Link to={`/edit-line/${post._id}`}>Edit post</Link>
      </div>
    </div>
  )
}

LineInfo.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  submitComment: PropTypes.func.isRequired,
  handleOnTextChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired
}
export default LineInfo
