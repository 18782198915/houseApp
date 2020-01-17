import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { InputItem, Button, WhiteSpace, Flex, WingBlank, Toast} from 'antd-mobile';
import {login } from '../../api/apis'
export default class Login extends Component {
    state={
        acc:'',
        pwd:'',
        oldAcc:'',
        oldPwd:''
    }
    render() {
        let {acc,pwd}=this.state
        return (
            <div>
                <WingBlank>
                <Flex justify="center">
                    <div style={{height:203}}>

                <img src={require('../../assets/images/logo.jpg')} width='150' style={{marginTop:50}}/>
                    </div>
                </Flex>
                <WhiteSpace size='xl' />
                <InputItem
                    placeholder="请输入用户名"
                    clear
                    value={acc}
                    onChange={val=>{this.setState({acc:val})}}
                >
                <div style={{ backgroundImage: 'url('+require('../../assets/images/icon_user.png')+')', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                </InputItem><WhiteSpace />
                <InputItem
                    placeholder="请输入密码"
                    clear
                    type="password"
                    value={pwd}
                    onChange={val=>{this.setState({pwd:val})}}
                >
                    <div style={{ backgroundImage: 'url('+require('../../assets/images/icon_pwd.png')+')', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                </InputItem><WhiteSpace />
                <p>登录/注册即代表你同意<a href='#/serve' style={{color:'#5ebd6d'}}>《安居客用户服务协议》</a>及<a href='#/privacy' style={{color:'#5ebd6d'}}>《安居客隐私权政策》</a></p>
                <Button 
                style={{backgroundColor:'#3CB950',color:'#fff'}}
                activeStyle={{backgroundColor:'#5ebd6d'}}
                onClick={this.login.bind(this)}
                >登录</Button><WhiteSpace />
                <Flex justify="between">
                <Link to='/reg' style={{color:'#5ebd6d'}}>前往注册</Link>
                <Link to='/forgetpwd' style={{color:'#5ebd6d'}}>忘记密码?</Link>
                </Flex>
                </WingBlank>
            </div>
        )
    }
    login(){
        let {acc,pwd,oldAcc,oldPwd}=this.state
        if(oldAcc===acc && oldPwd===pwd) return
        this.setState({
            oldAcc:acc,
            oldPwd:pwd
        })
        login(acc,pwd).then(data=>{
            if(data.data=='ok'){
                Toast.success('登录成功', 1)
                window.location.href='#/'
            }else{
                Toast.fail('登陆失败，请检查用户名和密码是否正确！！！', 1);
            }
            
        })
    }
}

