import React, { Component } from 'react'
import './chat.scss'
export default class Chat extends Component {
    render() {
        return (
            <div className='chat'>
                <div className='mid'>
                    <p><img className='header' src={require('../../../assets/images/header.jpeg')} width='150' style={{borderRadius:75}}/></p>
                    <p><span>专业顾问：</span><span className='name'>张晓梅</span></p>
                    <p>专业服务诚信做人诚心做事</p>
                    <p><button style={{backgroundColor:'#62AB00',color:'#fff',width:150}}>我要聊天</button></p>
                </div>
            </div>
        )
    }
}
