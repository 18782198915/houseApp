import React, { Component } from 'react'
import { Button, WingBlank, Modal } from 'antd-mobile'
import BScroll from 'better-scroll'
import './mine.scss'
const alert = Modal.alert
export default class Mine extends Component {
    state = {
        navList: [{ url: 'icon_info_1.png', title: '我的积分' },
        { url: 'icon_info_2.png', title: '我的订阅' },
        { url: 'icon_info_3.png', title: '联系人' },
        { url: 'icon_info_4.png', title: '房贷计算器' },
        { url: 'icon_info_5.png', title: '我的房子' },
        { url: 'icon_info_6.png', title: '我的看房记录' },
        { url: 'icon_info_7.png', title: '我的问答' },
        { url: 'icon_info_8.png', title: '设置' },
        { url: 'icon_info_9.png', title: '意见反馈' }]
    }
    render() {
        return (
            <div className='mine' id='mine'>
                <ul className='content'>
                    <div className='user'>
                        <div className='top'>
                            <div className='left'>
                                <img className='header' src={require('../../../assets/images/header.jpeg')} />
                                <div className='message'>
                                    <h4>
                                        <a href='#/login'>登录</a>/
                                    <a href='#/reg'>注册</a>
                                    </h4>
                                    <p>可以与经济人发起聊天</p>
                                </div>
                            </div>
                            <img src={require('../../../assets/images/icon_set.png')} width='20' height='20' />
                        </div>
                        <div className='bottom'>
                            <div className='userinfo'>
                                <p className='userinfo-top'>0</p>
                                <p className='userinfo-bottom'><img src={require('../../../assets/images/icon_user_1.png')} width='20' style={{ marginRight: 8 }} />钱包</p>
                            </div>
                            <div className='userinfo'>
                                <p className='userinfo-top'>0</p>
                                <p className='userinfo-bottom'><img src={require('../../../assets/images/icon_user_2.png')} width='20' style={{ marginRight: 8 }} />优惠</p>
                            </div>
                            <div className='userinfo'>
                                <p className='userinfo-top'>0</p>
                                <p className='userinfo-bottom'><img src={require('../../../assets/images/icon_user_3.png')} width='20' style={{ marginRight: 8 }} />积分</p>
                            </div>
                        </div>
                    </div>
                    <div className='user-info-box'>
                        {this.state.navList.map((e, i) => {
                            return (<a href='#' key={i}>
                                <div className='user-info-list'>
                                    <p><img src={require('../../../assets/images/' + e.url)} width='20' style={{ marginRight: 10 }} />{e.title}</p>
                                    <img src={require('../../../assets/images/next.png')} width='14' />
                                </div>
                            </a>)
                        })}
                    </div>
                    <WingBlank>
                        <Button
                            style={{ backgroundColor: ' #62AB00', color: '#fff', margin: 20 }}
                            activeStyle={{ backgroundColor: '#96d147' }}
                            onClick={this.signOut.bind(this)}
                        >注销</Button>
                    </WingBlank>
                </ul>
            </div>
        )
    }
    signOut() {
        alert('是否确认退出？', '', [
            {
                text: '取消'
            },
            { text: '确认', onPress: () => { window.location.href = '#/login' } },
        ])
    }
    componentDidMount(){
        new BScroll('#mine',{click:true})
    }
}
