import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      testNum: 46
    };
  }

  render() {
    return(
      <h3>Hello World {this.state.testNum}</h3>
    );
  }
  
}

export default App;