import React from 'react'

const style = {
  addressFooter: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '97vw',
    padding: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    color: 'rgba(255, 255, 255, 0.39)',
    marginLeft: '0'
  }
}
const Company = () => {
  return (
    <div style={style.addressFooter}>
      <h3>Drop a Line</h3>
      <p><strong>Address:</strong> 1850 Cross Roads, Zira, CA  <strong>Zip code:</strong>  65712 <strong>Contact Number:</strong>  406-658-1236</p>
    </div>
  )
}

export default Company
