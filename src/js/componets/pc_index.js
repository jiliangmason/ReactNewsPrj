/**
 * Created by Administrator on 2017/4/20 0020.
 */
import React from 'react';
import {Row, Col} from 'antd';
import PCHeader from './pc_header';
import PCFooter from  './pc_footer';
import PCNewsContainer from './pc_news_container';

export default class PCIndex extends React.Component {
    render() {
        return (
            <div>
                <PCHeader />
                <PCNewsContainer />
                <PCFooter />
            </div>

        )
    }
}