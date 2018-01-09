import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    border: '3px red solid',
    background: 'silver',
    width: 500
  }
}
const CommentCard = ({text, deleteComment}) => {
  return (
    <div style={style.container}>
      <p>{text}</p>
      <button type='button' onClick={() => deleteComment(text)}>Delete</button>
    </div>
  )
}

CommentCard.propTypes = {
  text: PropTypes.array.isRequired,
  deleteComment: PropTypes.func.isRequired
}

export default CommentCard
