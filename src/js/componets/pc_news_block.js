/**
 * Created by Administrator on 2017/4/28 0028.
 */
import React from 'react';
import {Row, Col, Card} from 'antd';
import {Link, Router, Route, browserHistory} from 'react-router';

/*
* 新闻文字区
* */

export default class PCNewsBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news: "",
        }
    }

    componentWillMount() {
        var fetchOptions = {
            method: "GET"
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, fetchOptions)
            .then(response=>response.json())
            .then(json=>this.setState({news: json}));
    }

    render() {
        const news = this.state["news"];
        //console.log(news.length);
        const newsList = news.length
            ?
            news.map((newsItem, index)=>
                (<li key={index}>
                    <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                        {newsItem.title}
                    </Link>
                </li>)
            )
            : "没有加载到任何新闻";
        return (
            <div className="topNewsList">
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}