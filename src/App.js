import React, { Component } from 'react';
import logo from './logo.svg';
import Counter from './Counter';
import Mouse from './Mouse';
import MouseHoc from './MouseHoc';
import RenderPropsMouse from './RenderPropsMouse';
import './App.css';

class App extends Component {
  render() {
    console.log("Render function called ..., MouseHoc is", MouseHoc);
    return (
      <div className="App">
        <header className="App-header">
          <Mouse />
          {/* <MouseHoc /> */}
          {/* <Counter /> */}
          <RenderPropsMouse>
            {
              (x, y) => <p> The mouse position is : ({x}, {y}) </p>
            }
          </RenderPropsMouse>
        </header>
      </div>
    );
  }
}

export default App;
