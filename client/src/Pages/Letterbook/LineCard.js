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
    border: '4px green solid',
    width: 400,
    height: 350
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
      <div>
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
