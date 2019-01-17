import React from "react";

const style = {
  position: "fixed",
  height: "50%",
  width: "100%",
  zIndex: "99",
  top: "50%"
};

class RenderPropsMouse extends React.Component {
  state = {
    x: 0,
    y: 0
  };

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  };

  render() {
    const { x, y } = this.state;
    return (
      <div style={style} onMouseMove={this.handleMouseMove}>
        {this.props.children(x, y)}
      </div>
    );
  }
}

export default RenderPropsMouse;
