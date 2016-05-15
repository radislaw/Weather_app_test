import React from 'react'
import Time from 'react-time'

class CurentTime extends React.Component {

  render() {
    let now = new Date()
    let wasDate = new Date("Thu Jul 18 2013 15:48:59 GMT+0400")
    return (
      <date>
        <Time value={now} format="HH:mm" />
      </date>
    )
  }
}

export default CurentTime;
