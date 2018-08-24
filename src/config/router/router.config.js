/**
 * Created by kurosaki on 2018/8/13.
 */
import React, { Component } from 'react';
import { HashRouter, Route } from 'react-keeper'
import Demo from '../../container/Demo'
import Index from '../../container/Index'
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();

export default class Router extends Component {
    render(){
        return (
            <HashRouter vhistory={customHistory}>
                <div>
                    <Route component={ Index } path="/"/>
                    <Route  cache component={ Demo }  path="/demo"/>

                </div>
            </HashRouter>
        )
    }
}
















