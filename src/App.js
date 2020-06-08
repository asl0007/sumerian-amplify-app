import React, {Component} from 'react';
import './App.css';
import { SumerianScene } from 'aws-amplify-react';
import Amplify from 'aws-amplify';
import Aws_exports from './aws-exports';
import '@aws-amplify/ui/dist/style.css';

Amplify.configure(Aws_exports);

class App extends Component {
  // Load scene with sceneName: "scene1" into dom element id: "sumerian-scene-dom-id"
// async loadAndStartScene() {
//   await Amplify.XR.loadScene("scene1", "sumerian-scene-dom-id");
//   Amplify.XR.start("scene1");
// }
  render() {
    return (
      // <div id="sumerian-scene-dom-id"></div>
      <div style={ { height: '100vh' } }>
        <SumerianScene sceneName='scene1'/>
      </div>
    );
  }
};

export default App;
