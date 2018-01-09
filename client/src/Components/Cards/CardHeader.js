import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    border: 'blue solid 2px',
    display: 'flex'
  },
  img: {
    width: '100%',
    height: '100%',
    maxWidth: '20%',
    padding: 10,
    borderRadius: 50
  }
}

const CardHeader = ({name, img}) => {
  return (
    <div>
      <div style={style.container}>
        <img style={style.img} src={img} />
        <h4>{name}</h4>
      </div>
    </div>
  )
}

CardHeader.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default CardHeader
