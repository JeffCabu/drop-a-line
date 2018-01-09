import React from 'react'
import {NavLink} from 'react-router-dom'

const style = {
  flex: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItem: 'center',
    backgroundColor: 'black',
    borderRadius: 5,
    padding: '2%'
  },
  color: {
    color: 'white'
  }
}
const Nav = () => {
  return (
    <nav style={style.flex}>
      <NavLink activeStyle={{
        color: 'red',
        fontWeight: 'bold'
      }} style={style.color} exact to='/'> Home </NavLink>

      <NavLink activeStyle={{
        color: 'red', fontWeight: 'bold'
      }} style={style.color} to='/letterbook'> Letterbook </NavLink>

      <NavLink activeStyle={{
        color: 'red', fontWeight: 'bold'
      }} style={style.color} to='/compose'> Compose </NavLink>

      {/* <NavLink activeStyle={{
        color: 'red', fontWeight: 'bold'
      }} style={style.color} to='/edit-line/:postId'> Edit </NavLink> */}

    </nav>
  )
}

export default Nav
