
import React from 'react';
import './App.css';
import AddContact from './components/AddContact';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newData : []
    }
  }
  render() {
  return (
    <div>
      <AddContact />
      <div></div>
    </div>
  );
  }
}



