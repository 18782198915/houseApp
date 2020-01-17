import React, { Component } from 'react'
import { Flex,InputItem, Button, WhiteSpace, WingBlank,Modal,Toast } from 'antd-mobile';
import { valite } from '../../api/apis'
export default class Forgetpsw extends Component {
    state = {
        acc: '',
        pwd: '',
        verify: "",
        getVerify: '',
        verifyBtn: '获取验证码',
        flagBtn:false
    }
    render() {
        let { acc, pwd, verify, verifyBtn, flagBtn,isAgree } = this.state
        return (
            <div style={{ backgroundColor: '#f5f5f9', height: '100%' }}>
                <WingBlank>
                    <Flex>
                        <img onClick={() => { window.history.go(-1) }} src={require('../../assets/images/icon_back.png')} width='40'></img>
                        <h1 style={{marginLeft:20}}>找回密码</h1>
                    </Flex>
                    <WhiteSpace size='xl' />
                    <InputItem
                        type="phone"
                        placeholder="请输入手机"
                        clear
                        value={acc}
                        onChange={val => { this.setState({ acc: val }) }}
                    >
                    </InputItem>
                    <InputItem
                        placeholder="请输入新密码"
                        clear
                        value={pwd}
                        onChange={val => { this.setState({ pwd: val }) }}
                    >
                    </InputItem>
                    <InputItem
                        placeholder="请输入验证码"
                        clear
                        value={verify}
                        onChange={val => { this.setState({ verify: val }) }}
                        extra={<button style={{ backgroundColor: '#fff', border: 0, color: '#C5C5C5', fontSize: 14 }} onClick={this.getValite.bind(this)} disabled={flagBtn}>{verifyBtn}</button>}
                    >
                    </InputItem><WhiteSpace />
                    <WhiteSpace />
                    <Button
                        style={{ backgroundColor: '#3CB950', color: '#fff', }}
                        activeStyle={{ backgroundColor: '#5ebd6d' }}
                        onClick={this.handReg.bind(this)}
                        disabled={isAgree}
                    >确认修改</Button><WhiteSpace />
                </WingBlank>
            </div >
        )
    }
    getValite() {
        if(!this.state.acc){
            Toast.fail('请输入手机号！！！', 1)
            return
        }
        let time = 5
        valite().then(data => {
            this.setState({
                flagBtn:true,
                getVerify:data.data
            })
            console.log('验证码是',data.data)
            let countDown = setInterval(() => {
                time -= 1
                this.setState({
                    verifyBtn: time + '秒'
                })
                if (time == 0) {
                    clearInterval(countDown)
                    this.setState({
                        verifyBtn: '重新获取验证码',
                        flagBtn:false
                    })
                }
            }, 1000);
        })
    }
    handReg() {
        let { acc, pwd, verify, getVerify, isAgree } = this.state
        if(!(acc&&pwd&&verify)){
            Toast.fail('请输入以上内容！！！', 1)
            return
        }
        if (!(verify == getVerify)){
            Toast.fail('验证码有误！！！', 1)
            return
        }
        
    }
}
