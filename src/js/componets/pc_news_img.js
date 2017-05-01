/**
 * Created by Administrator on 2017/4/28 0028.
 */
import React from 'react';
import {Row, Col, Card} from 'antd';
import {Link, Router, Route, browserHistory} from 'react-router';

/*
* 新闻图片区
* */

export default class PCNewsImageBlock extends React.Component {
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
        const styleImage = {
            display: "block",
            height: "90px",
            width: this.props.imageWidth,
        };
        const styleH3 = {
            width: this.props.imageWidth,
            overflow:"hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
        };
        const news = this.state["news"];
        //console.log(news.length);
        const newsList = news.length
            ?
            news.map((newsItem, index)=>
                <div className="imageblock" key={index}>
                    <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                        <div className="custom-image">
                            <img src={newsItem.thumbnail_pic_s} alt="pic" style={styleImage}/>
                        </div>
                        <div className="custom-card">
                            <h3 style={styleH3}>{newsItem.title}</h3>
                            <p>{newsItem.author_name}</p>
                        </div>
                    </Link>
                </div>
            )
            : "没有加载到任何新闻";
        return (
            <div className="topNewsList">
                <Card title={this.props.cardTitle} bordered={true} style={{width: this.props.width}}>
                    {newsList}
                </Card>
            </div>
        )
    }
}