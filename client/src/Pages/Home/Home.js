import React from 'react'

const style = {
  jumbotron: {
    border: '4px black solid',
    borderRadius: 15,
    textAlign: 'center',
    background: 'white',
    marginTop: 120,
    marginBottom: 120
  },
  space: {
    width: '100vw',
    height: '78vh',
    display: 'flex',
    justitfyContent: 'space-around',
    alignItems: 'center'
  }
}
const Home = () => {
  return (
    <div>
      <div style={style.jumbotron}>
        <h1>Hello, random person on the internet. <br /> Welcome to Drop A Line.</h1>
      </div>
      <div>
        <div style={style.jumbotron}>
          <h2>Letterbook</h2> <p> Is a book of letters.</p><p> nifty right?</p>
        </div>
        <div style={style.jumbotron}>
          <h2>Compose</h2> <p>Just as it sounds, this is where you go to "Drop a Line"</p>
        </div>
      </div>
    </div>
  )
}

export default Home
