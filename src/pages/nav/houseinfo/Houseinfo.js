import React, { Component } from 'react'
import { imgUrl } from '../../../api/apis'
import { WingBlank } from 'antd-mobile'
import BScroll from 'better-scroll'
import './houseinfo.scss'
export default class Houseinfo extends Component {
    state = {
        product: {
            name: "美的云溪郡",
            area: "仁寿县",
            type: "4室2厅",
            point: "117",
            price: "9000",
            range: "仁寿大道",
            imgs: "/imgs/1.jpg",
        },
        houseMessage: {
            price: '16956',
            orientation: '东',
            type: '板塔结合',
            fitment: '精装',
            use: '高端住宅',
            hangtime: '2019.12.01',
            floor: '高楼层/33',
            elevator: '有电梯',
            time: '2017年',
            ownership: '商品房'
        },
        focus:'icon_focus_1.png',
        focusFlag:false,
        focusWord:'关注'
    }
    render() {
        let { product, houseMessage,focus,focusWord } = this.state
        return (
            <div className='houseinfo' id='houseinfo'>
                <ul className='content'>
                <div className='top'>
                    <img onClick={() => { window.history.go(-1) }} src={require('../../../assets/images/icon_back.png')} className='back'></img>
                    <div className='center'>
                        <img src={require('../../../assets/images/logo_1.png')} className='center-img'></img>
                        <span className='center-name'>房源</span>
                    </div>
                    <a><img src={require('../../../assets/images/icon_mine.png')} className='mine'></img></a>
                </div>
                <div>
                    <img src={imgUrl() + product.imgs} width='100%' height='230' />
                </div>
                <WingBlank size="lg">
                    <div className='title'>
                        <h1>{product.name}</h1>
                        <label className='focus' onClick={this.handle.bind(this)}>
                            <img src={require('../../../assets/images/'+focus)} width='20'></img>
                            <p>{focusWord}</p>
                        </label>
                    </div>
                    <div className='info-list'>
                        <div className='info'>
                            <p>售价</p>
                            <p className='info-name'>{product.point * product.price / 10000}<span>万元</span></p>
                        </div>
                        <div className='info'>
                            <p>房型</p>
                            <p className='info-name'>{product.type}</p>
                        </div>
                        <div className='info'>
                            <p>建筑面积</p>
                            <p className='info-name'>{product.point}<span>㎡</span></p>
                        </div>
                    </div>
                    <div className='open-app'>
                        <img src={require('../../../assets/images/logo_1.png')} width='34'></img>
                        <span style={{ marginLeft: 10 }}>打开房源APP，在线咨询经纪人</span>
                    </div>
                    <div className='icon-list'>
                        <div className='icon'>VIP房源</div>
                        <div className='icon'>随时看房</div>
                        <div className='icon'>有电梯</div>
                    </div>
                    <div className='house-message-list'>
                        <div className='house-message'>
                            <div style={{ width: '50%' }}>
                                <p><span className='house-title'>单价：</span>{houseMessage.price}元/平</p>
                                <p><span className='house-title'>朝向：</span>{houseMessage.orientation}</p>
                                <p><span className='house-title'>楼型：</span>{houseMessage.type}</p>
                                <p><span className='house-title'>装修：</span>{houseMessage.fitment}</p>
                                <p><span className='house-title'>用途：</span>{houseMessage.use}</p>
                            </div>
                            <div style={{ width: '50%' }}>
                                <p><span className='house-title'>挂牌：</span>{houseMessage.hangtime}</p>
                                <p><span className='house-title'>电梯：</span>{houseMessage.floor}</p>
                                <p><span className='house-title'>楼层：</span>{houseMessage.elevator}</p>
                                <p><span className='house-title'>年代：</span>{houseMessage.time}</p>
                                <p><span className='house-title'>权属：</span>{houseMessage.ownership}</p>
                            </div>
                        </div>
                        <div style={{ fontSize: 16 }}><span className='house-title'>首付预算：</span><a href='#' style={{ color: '#6389AC' }}>咨询经济人首付</a></div>
                        <div style={{ fontSize: 16, marginTop: 16 }}><span className='house-title'>小区：</span><a href='#' style={{ color: '#6389AC' }}>{product.name}</a></div>
                    </div>
                </WingBlank>
                </ul>
            </div>
        )
    }
    handle(){
        this.setState({
            focusFlag:!this.state.focusFlag,
            focus:this.state.focusFlag?'icon_focus_1.png':'icon_focus_2.png',
            focusWord:this.state.focusFlag?'关注':'已关注'
        })
    }
    componentDidMount(){
        new BScroll('#houseinfo',{click:true})
    }
}
