/**
 * Created by Administrator on 2017/4/13 0013.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Router, Route, hashHistory} from 'react-router';
import {Menu, Button, Icon} from 'antd';
import 'antd/dist/antd.css';
import PCIndex from './componets/pc_index';
import PCNewsDetails from './componets/pc_details';
import MobileIndex from './componets/mobile_index';
import MediaQuery from 'react-responsive';


export default class Root extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'mail',
        }
    }

    handleClick(ev) {
        console.log('click', ev);
        this.setState({
            current: ev.key,
        });
    }

    render() {
        return (
            //这里替换原来的index成为程序入口

            <div>
                <MediaQuery query="(min-device-width:1224px)">
                    <Router history={hashHistory}>
                        <Route path="/" component={PCIndex}/>
                        <Route path="/details/:uniquekey" component={PCNewsDetails}/>
                    </Router>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <MobileIndex />
                </MediaQuery>
            </div>

        );

    };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));