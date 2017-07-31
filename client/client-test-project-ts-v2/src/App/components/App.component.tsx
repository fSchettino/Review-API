import * as React from 'react';
import '../App.css';
import Hello from '../../Hello/components/Hello.component';

const logo = require('../../_public/images/logo.svg');

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <Hello name="Fabio" enthusiasmLevel={10} />
      </div>
    );
  }
}

export default App;