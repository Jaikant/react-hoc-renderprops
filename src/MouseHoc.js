import React from 'react';
import { withMouse } from './withMouse';


class MouseHoc extends React.Component {
  render(){
    const {x, y} = this.props;

    return(
      <p> The mouse position is : ({x}, {y}) </p>      

    )
  }
}

export default withMouse(MouseHoc);