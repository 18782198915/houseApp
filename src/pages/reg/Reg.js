import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { InputItem, Button, WhiteSpace, WingBlank, Checkbox, Modal,Toast } from 'antd-mobile';
import { reg, valite } from '../../api/apis'
const AgreeItem = Checkbox.AgreeItem;

export default class Reg extends Component {
    state = {
        acc: '',
        pwd: '',
        verify: "",
        getVerify: '',
        verifyBtn: '获取验证码',
        isAgree: true,
        flagBtn:false
    }
    render() {
        let { acc, pwd, verify, verifyBtn, flagBtn,isAgree } = this.state
        return (
            <div style={{ backgroundColor: '#fff', height: '100%' }}>
                <WingBlank>
                    <WhiteSpace size='xl' />
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
                        placeholder="请输入密码"
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
                    <AgreeItem data-seed="logId" onChange={e => { this.setState({ isAgree: !e.target.checked }) }} >
                        <span style={{ color: '#C5C5C5' }}>我已同意<a href='#/serve' style={{ color: '#5ebd6d' }}>《用户服务协议》</a>及<a href='#/privacy' style={{ color: '#5ebd6d' }}>《隐私权政策》</a></span>
                    </AgreeItem>
                    <WhiteSpace />
                    <Button
                        style={{ backgroundColor: isAgree?'#5ebd6d':'#3CB950', color: '#fff' }}
                        activeStyle={{ backgroundColor: '#5ebd6d' }}
                        onClick={this.handReg.bind(this)}
                        disabled={isAgree}
                    >注册</Button><WhiteSpace />
                    <Link to='/login' style={{ color: '#5ebd6d' }}>已有账号</Link>
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
        reg(acc,pwd).then(data => {
            const alert = Modal.alert
            if(data.data=='ok'){
                alert('是否跳转到登录页面？','', [
                    {
                        text: '取消', onPress: () => this.setState({
                            acc: '', pwd: '', verify: '', verifyBtn: '获取验证码',isAgree: false
                        })
                    },
                    { text: '确认', onPress: () => { window.location.href = '#/login' } },
                ])
            }else{
                Toast.fail('注册失败，用户名重复！！！', 1);
            }
        })
    }
}
