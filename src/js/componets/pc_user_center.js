/**
 * Created by Administrator on 2017/5/1 0001.
 */
import React from 'react';
import {Row, Col, Icon, Tabs, Upload, Modal, Form, Menu, Card} from 'antd';
import {Link} from 'react-router';
/*一定要加这个，否则会报Link is not defined*/
import PCHeader from './pc_header';
import PCFooter from  './pc_footer';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

export default class PCUserCenter extends React.Component {
    constructor() {
        super();
        this.state = {
            usercollection: "",
            usercomments:"",
            previewImage: "",
            previewVisible: false,
        }
    }

    handleCancel() {
        this.setState({previewVisible: false});
    }

    componentWillMount() {
        var myFetchOptions = {
            method: "GET"
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid, myFetchOptions)
            .then(response=>response.json())
            .then(json=> {
                    this.setState({
                        usercollection: json
                    });
                document.title = "个人中心";
                }
            ).catch(err=>(console.log(err)));

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid, myFetchOptions)
            .then(response=>response.json())
            .then(json=> {
                    this.setState({
                        usercomments: json
                    });
                    document.title = "个人中心";
                }
            ).catch(err=>(console.log(err)));
    }


    render() {
        const props = {
            action: "//jsonplaceholder.typicode.com/posts/",
            listType: "picture-card",
            headers: {"Access-Control-Allow-Origin": "*"}, /*跨域*/
            defaultFileList: [{
                uid: -1,
                name: "xxx.png",
                status: "done",
                url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
            onPreview: (file)=> {
                this.setState({
                    previewImage: file.url || file.thumbUrl,
                    previewVisible: true,
                });
            }

        };

        const {usercollection, usercomments} = this.state;  /*解构赋值：这里必须是usercollection否则出错，相当于this.state.usercollection*/
        const usercollectList = usercollection.length
            ? usercollection.map((collect, index)=>(
                <Card key={index} title={collect.uniquekey} extra={<a href={`/#/details/${collect.uniquekey}`} target="_blank">点击查看</a>}>
                    <p>{collect.Title}</p>
                </Card>
        ))  /*html结构必须写在（）里面*/

            : "还没有收藏";

        const usercommentsList = usercomments.length
            ? usercomments.map((comment, index)=>(
            <Card key={index} title={`${comment.UserName} 于 ${comment.datetime} 评论了文章${comment.uniquekey}`} extra={<a href={`/#/details/${comment.uniquekey}`} target="_blank">点击查看</a>}>
                <p>{comment.Comments}</p>
            </Card>
        ))  /*html结构必须写在（）里面*/

            : "还没有评论";

        return (
            <div>
                <PCHeader />
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs defaultActiveKey="3">
                            <TabPane tab={<span><Icon type="android"/>我收藏的页面</span>} key="1">
                                <div className="comment">
                                    <Row>
                                        <Col span={24}>{usercollectList}</Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab={<span><Icon type="android"/>我的评论</span>} key="2">
                                <div className="comment">
                                    <Row>
                                        <Col span={24}>{usercommentsList}</Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab={<span><Icon type="android"/>头像设置</span>} key="3">
                                <div className="clearfix">
                                    <Upload {...props}>
                                        <Icon type="plus"/>
                                        <div className="ant-upload-text">
                                            上传照片
                                        </div>
                                    </Upload>
                                    <Modal visible={this.state.previewVisible} onCancel={this.handleCancel.bind(this)}>
                                        <img alt="预览" src={this.state.previewImage}/>
                                    </Modal>
                                </div>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter />
            </div>
        )
    }
}