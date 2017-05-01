/**
 * Created by Administrator on 2017/4/30 0030.
 */
import React from 'react';
import {Row, Col, Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal, Card, notification} from 'antd';
import {Link} from 'react-router'
/*一定要加这个，否则会报Link is not defined*/
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class CommonComments extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: "",
        }
    }

    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions)
            .then(response=>response.json())
            .then(json=> {
                this.setState({
                    comments: json
                });
            });
        this.props.form.setFieldsValue({remark: ""}); /*评论完后清理输入框*/
    }


    handleSubmit(e) {
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData = this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formData.remark, myFetchOptions)
            .then(response=> {
                console.log(response);
                response.json();

            })
            .then(json=> {
                this.componentWillMount();
            });
    }

    addUserCollection() {
        var myFetchOptions = {
            method: "GET",
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid="+localStorage.userid+"&uniquekey=" + this.props.uniquekey, myFetchOptions)
            .then(response=>response.json())
            .then(json=>{
                /*收藏成功*/
                notification.success({
                    message: "消息提醒",
                    description: "此文章收藏成功"
                });

                });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {comments} = this.state;
        /*this.state.comments*/
        const commentList = comments.length
            ? comments.map((comment, index)=>(
            <Card key={index} extra={<a href="#">发表于 {comment.datetime}</a>} title={comment.UserName}>
                <p>{comment.Comments}</p>
            </Card>
        ))
            : "没有评论";
        return (
            <div className="comment">
                <Row>
                    <Col span={24}>
                        {commentList}
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="评论">
                                {getFieldDecorator('remark', {initialValue: ""})(
                                    <Input placeholder="请输入评论" type="textarea"/>
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit">提交评论</Button>
                            &nbsp;&nbsp;
                            <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>添加收藏</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CommonComments = Form.create({})(CommonComments);