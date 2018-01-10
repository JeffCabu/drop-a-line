import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    background: 'rgba(255, 194, 118, 0.6)'
  }
}

const CardBody = ({title, trait}) => {
  return (
    <div style={style.container}>
      <p>From CardBody</p>
      <p>Title? is in "LineCard"{title}------ Trait is in "LineCard"{trait}</p>
    </div>
  )
}

CardBody.propTypes = {
  title: PropTypes.string.isRequired,
  trait: PropTypes.string.isRequired
}

export default CardBody
