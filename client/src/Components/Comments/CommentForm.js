import React from 'react'
import PropTypes from 'prop-types'

const style = {
  textBox: {
    width: '60vw',
    boxSizing: 'border-box',
    border: '2px solid #ccc',
    borderRadius: 4,
    fontSize: 16,
    background: 'rgba(255, 255, 255, .5)',
    backgroundPosition: '10px 10px',
    backgroundRepeat: 'no-repeat',
    padding: '12px 20px 12px 40px',
    transition: 'width 0.5s'
  }
}
const CommentForm = ({handleOnTextChange, text, submitComment}) => {
  return (
    <form>
      <textarea placeholder='Enter a Comment' style={style.textBox} rows='4' onChange={handleOnTextChange} value={text} />
      <button type='button' onClick={submitComment}>Comment</button>
    </form>
  )
}

CommentForm.propTypes = {
  text: PropTypes.string.isRequired,
  handleOnTextChange: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired
}

export default CommentForm
