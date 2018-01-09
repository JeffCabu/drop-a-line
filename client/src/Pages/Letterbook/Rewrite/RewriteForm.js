import React from 'react'
import PropTypes from 'prop-types'

const style = {
  background: {
    background: 'url(https://cdn.pixabay.com/photo/2016/09/10/17/24/tag-1659733__340.jpg)center',
    width: '100vw',
    height: '94vh'
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 200
  },
  text: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'solid white 2px',
    width: '60vw',
    backgroundColor: 'rgba(0, 39, 107, 0.8)'
  },
  textBox: {
    width: '58vw',
    boxSizing: 'border-box',
    border: '2px solid #ccc',
    borderRadius: 4,
    fontSize: 16,
    background: 'rgba(255, 255, 255, .5)',
    backgroundPosition: '10px 10px',
    backgroundRepeat: 'no-repeat',
    padding: '12px 20px 12px 40px',
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: 746,
    minWidth: 200
  }
}

const Rewrite = ({submitPostToServer, userName, img, message,
  onImgChange, onUserNameChange, onMessageChange}) => {
  return (
    <form style={style.background}>
      <div style={style.center}>
        <div style={style.text}>
          <div>
            <label>Name: </label>
            <br />
            <input onChange={onUserNameChange} value={userName} />
          </div>
          <div>
            <label>Img: </label>
            <br />
            <input onChange={onImgChange} value={img} />
          </div>
          <div>
            <label>Message: </label>
            <textarea style={style.textBox} rows='6'onChange={onMessageChange} value={message} />
          </div>
          <button type='button' onClick={submitPostToServer}>Save Changes</button>
        </div>
      </div>
    </form>
  )
}

Rewrite.propTypes = {
  userName: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  submitPostToServer: PropTypes.func.isRequired,
  onImgChange: PropTypes.func.isRequired,
  onUserNameChange: PropTypes.func.isRequired,
  onMessageChange: PropTypes.func.isRequired
}

export default Rewrite
