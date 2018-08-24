import React, { Component } from 'react';
import './App.css';
import {Router} from './config'
import CssBaseline from '@material-ui/core/CssBaseline';//css baseline




class App extends Component {
  render() {
    return (
        <React.Fragment>
            <CssBaseline>
                <Router>
                </Router>
            </CssBaseline>
        </React.Fragment>
    );
  }
}

export default App;
