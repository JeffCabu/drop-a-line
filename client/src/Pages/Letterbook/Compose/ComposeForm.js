import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../Components/Button/Button'

const style = {
  input: {
    width: '60vw',
    boxSizing: 'border-box',
    border: '2px solid #ccc',
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: 'white',
    backgroundPosition: '10px 10px',
    backgroundRepeat: 'no-repeat',
    padding: '12px 20px 12px 40px',
    transition: 'width 0.5s'
  }
}
const ComposeForm = ({onChangeHandler, handleSubmit}) => {
  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <br />
          <input style={style.input} type='text' placeholder='Enter User Name' onChange={onChangeHandler} id='userName' />
        </div>

        <div>
          <label>Image</label> <br />
          <input style={style.input} type='text' placeholder='Image' onChange={onChangeHandler} id='img' />
        </div>

        <div>
          <label>Compose your thoughts</label>
          <br />
          <textarea style={style.input} rows='6' type='text' placeholder='Drop a line' onChange={onChangeHandler} id='message' />
        </div>

        <Button type='button' handleClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  )
}

ComposeForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
export default ComposeForm
