import React, { Component } from 'react';
import { observer } from 'mobx-react'; //shows the changes made to the store
import './App.css';

import MyStore from './store.js';

class App extends Component {
  updateData() {
    MyStore.myData = 'hello';
  }

  resetData() {
    MyStore.myData = 'hi';
  }

  render() {
    return (
      <div className="App">
        <p>{MyStore.myData}</p>
        <button onClick={this.updateData}>Click to change</button>
        <button onClick={this.resetData}>Click to reset</button>
      </div>
    );
  }
}

export default observer(App); //App is told to observe for changes to MyStore
