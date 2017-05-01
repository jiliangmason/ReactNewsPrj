/**
 * Created by Administrator on 2017/4/22 0022.
 */
/**
 * Created by Administrator on 2017/4/20 0020.
 */
import React from 'react';
import {Row, Col, Menu, Icon} from 'antd';

export default class PCFooter extends React.Component {

    render() {
        return (
            <footer>
                <Row>
                    <Col span={2}/>
                    <Col span={20} className="footer">
                        &copy;&nbsp;2017 Copyright All rights Reserved.
                    </Col>
                    <Col span={2}/>
                </Row>
            </footer>

        )
    }
}