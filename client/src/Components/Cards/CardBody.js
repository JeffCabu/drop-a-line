import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    border: '1px red solid'
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
