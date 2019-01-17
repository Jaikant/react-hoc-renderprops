import React from 'react';

const style = {
  top: 0,
  position: 'fixed',
  height: '50%',
  width: '100%',
  zIndex: '99'
}
class TrackMouse extends React.Component {
  state = {
    x: 0,
    y: 0,
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    const { x, y } = this.state;
    return(
      <div style={style} onMouseMove={this.handleMouseMove}>
       <p> The mouse position is : ({x}, {y}) </p>

      </div>
    )
  }
}

export default TrackMouse;