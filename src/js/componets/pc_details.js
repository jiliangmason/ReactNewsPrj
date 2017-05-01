/**
 * Created by Administrator on 2017/4/29 0029.
 */
import React from 'react';
import {Row, Col, BackTop} from 'antd';
import PCHeader from './pc_header';
import PCFooter from  './pc_footer';
import PCNewsImageBlock from './pc_news_img';
import CommonComments from './common_comments';

export default class PCNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ""
        }
    }

    /*
    * 关于response.json()详情见https://developer.mozilla.org/en-US/docs/Web/API/Body/json
    * 这里必须使用componetWillMount否则后面的pagecontent为null
    * */
    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
            .then(response=>response.json())
            .then(json=>{
                this.setState({
                    newsItem:json
                });
                document.title = this.state.newsItem.title + '- React News | 新闻平台';
            });
    }

    createMarkup () {
        return {__html: this.state.newsItem.pagecontent};
    }

    render() {
        return (
            <div>
                <PCHeader />
                <Row>
                    <Col span={2}></Col>
                    <Col span={13} className="container">
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <CommonComments uniquekey={this.props.params.uniquekey}/>
                    </Col>
                    <Col span={7}>
                        <PCNewsImageBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="150px"/>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <BackTop />
                <PCFooter />
            </div>
        )

    }
}