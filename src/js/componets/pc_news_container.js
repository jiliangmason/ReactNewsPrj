/**
 * Created by Administrator on 2017/4/28 0028.
 */
import React from 'react';
import {Row, Col, Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal, Carousel} from 'antd';
import {Link} from 'react-router';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_img';
import PCProducts from './pc_product';

/*
* 包含新闻文字区+图片区
* */

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            effect: "fade",
            autoplay: true,
            slidesToShow: 1,
        };

        return (
            <div>
                <Row>
                    <Col span={1}>
                    </Col>
                    <Col span={22} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div className="carouselList"><img src="./src/images/p1.jpg" alt=""/></div>
                                    <div className="carouselList"><img src="./src/images/p2.jpg" alt=""/></div>
                                    <div className="carouselList"><img src="./src/images/p3.jpg" alt=""/></div>
                                    <div className="carouselList"><img src="./src/images/p4.jpg" alt=""/></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count="6" type={"top"} cardTitle="新闻头条" width="400px" imageWidth="112px"/>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                <PCNewsBlock count={20} type="top" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count={20} type="guoji" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="娱乐" key="3">
                                <PCNewsBlock count={20} type="yule" width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>
                        <Tabs className="tabs_product">
                            <TabPane tab="热搜排行榜" key="1">
                                <PCProducts />
                            </TabPane>
                        </Tabs>
                        <div>
                            <PCNewsImageBlock count="16" type={"yule"} cardTitle="娱乐头条" width="100%" imageWidth="112px"/>
                            <PCNewsImageBlock count="16" type={"junshi"} cardTitle="军事头条" width="100%" imageWidth="112px"/>
                        </div>
                    </Col>
                    <Col span={1}>
                    </Col>
                </Row>
            </div>
        )
    }

}