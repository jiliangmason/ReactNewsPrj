/**
 * Created by Administrator on 2017/4/20 0020.
 */
import React from 'react';
import {Row, Col, Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal} from 'antd';
import {Link} from 'react-router' /*一定要加这个，否则会报Link is not defined*/
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;


class PCHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: '',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        }
    }

    /*
    * 刷新加载后依然是刷新之前的状态
    * */
    componentWillMount() {
        if (localStorage.userid != "") {
            this.setState({
                userid: localStorage.userid,
                userNickName: localStorage.userNickName,
                hasLogined: true
            })
        }
    }

    setModalVisible(value) {
        this.setState({
            modalVisible: value,
        });
    }

    handleClick(e) {
        if (e.key == "register") {
            this.setState({
                current: "register",
            });
            this.setModalVisible(true);
        }
        else {
            this.setState({
                current: e.key,
            });
        }
    }

    callback(key) {
        if (key == 1) {
            this.setState({
                action: "login"
            });
        }
        else if (key == 2) {
            this.setState({
                action: "register"
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData = this.props.form.getFieldsValue(); //注意这里是getFieldsValue而不是getFieldValue
        console.log(formData);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action + "&username="+formData.userName+"&password="+formData.password+"&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_confirmPassword, myFetchOptions)
            .then(function (response) {
                return response.json();
            })
            .then(json=> {
                console.log(json);
                this.setState({
                    userNickName: json.NickUserName,
                    userid: json.UserId
                });
                localStorage.userNickName = this.state.userNickName;
                localStorage.userid = this.state.userid; //localStorage: 存储在本地
            })
            .catch(err=>{
               console.log(err);
            });

        if (this.state.action == "login") {

            this.setState({
                hasLogined: true
            });

        }

        message.success("请求成功！");
        this.setModalVisible(false);
    }

    logout() {
        localStorage.userid = "";
        localStorage.userNickName = "";
        this.setState({
            hasLogined:false
        });
    }

    render() {
        let {getFieldDecorator} = this.props.form;
        let userShow = this.state.hasLogined
            ?
            <Menu.Item key="logout" className="register">
                <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                <Link target="_blank" to={'usercenter'}>
                    <Button type="dashed" htmlType="button">个人中心</Button>
                </Link>
                &nbsp;&nbsp;
                <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
            </Menu.Item>
            :
            <Menu.Item key="register" className="register">
                <Icon type="appstore"/>注册/登陆
            </Menu.Item>;
        return (
            <header>
                <Row>
                    <Col span={2}/>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src="./src/images/logo.png" alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={this.state.current}>
                            <Menu.Item key="top">
                                <Icon type="appstore"/>头条
                            </Menu.Item >
                            <Menu.Item key="society">
                                <Icon type="appstore"/>社会
                            </Menu.Item>
                            <Menu.Item key="country">
                                <Icon type="appstore"/>国内
                            </Menu.Item>
                            <Menu.Item key="inter">
                                <Icon type="appstore"/>国际
                            </Menu.Item>
                            <Menu.Item key="fun">
                                <Icon type="appstore"/>娱乐
                            </Menu.Item>
                            <Menu.Item key="sports">
                                <Icon type="appstore"/>体育
                            </Menu.Item>
                            <Menu.Item key="tech">
                                <Icon type="appstore"/>科技
                            </Menu.Item>
                            {userShow}
                        </Menu>
                        <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
                               onCancel={()=>this.setModalVisible(false)}
                               onOk={()=>this.setModalVisible(false)} okText="关闭">
                            <Tabs type="card" onChange={this.callback.bind(this)}>

                                <TabPane tab="登陆" key="1">
                                    <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            {getFieldDecorator('userName')(
                                                <Input placeholder="请输入您的账号"/>
                                            )}
                                        </FormItem>
                                        <FormItem label="密码">
                                            {getFieldDecorator('password')(
                                                <Input type="password" placeholder="请输入您的密码"/>
                                            )}
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">登陆</Button>
                                    </Form>
                                </TabPane>

                                <TabPane tab="注册" key="2">
                                    <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            {getFieldDecorator('r_userName')(
                                                <Input placeholder="请输入您的账号"/>
                                            )}
                                        </FormItem>
                                        <FormItem label="密码">
                                            {getFieldDecorator('r_password')(
                                                <Input type="password" placeholder="请输入您的密码"/>
                                            )}
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            {getFieldDecorator('r_confirmPassword')(
                                                <Input type="password" placeholder="请再次输入您的密码"/>
                                            )}
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}/>
                </Row>
            </header>

        )
    }
}

export default PCHeader = Form.create()(PCHeader);