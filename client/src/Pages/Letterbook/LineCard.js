import React from 'react'
import PropTypes from 'prop-types'

import CardHeader from '../../Components/Cards/CardHeader'
import CardBody from '../../Components/Cards/CardBody'

import {
  Link
} from 'react-router-dom'

const style = {
  conatiner: {
    border: '2px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60vw'
  },
  content: {
    background: 'url(https://image.freepik.com/free-photo/old-paper-with-patterned-vintage-frame-blank-for-your-design_1484-598.jpg)',
    // border: '4px black solid',
    borderLeft: '1px solid black',
    boxShadow: '5px 8px',
    width: 400,
    height: 350
  },
  padding: {
    padding: 20
  }
}
const LineCard = ({post, deletePost}) => {
  return (
    <div style={style.conatiner}>
      <div style={style.content}>
        <div>
          <CardHeader name={post.userName} img={post.img} />
        </div>
        <div>
          <CardBody title={'post'} trait={post.message} />
        </div>
      </div>
      <div style={style.padding}>
        <button type='button' onClick={() => deletePost(post)}>Delete</button>
        <Link to={`/post/${post._id}`}>Comment</Link>
      </div>
    </div>
  )
}

LineCard.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
}
export default LineCard
