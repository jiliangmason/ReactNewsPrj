/**
 * Created by Administrator on 2017/4/21 0021.
 */
/**
 * Created by Administrator on 2017/4/20 0020.
 */
import React from 'react';
import {Row, Col} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';

export default class MobileIndex extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader/>
                <MobileFooter/>
            </div>

        )
    }
}