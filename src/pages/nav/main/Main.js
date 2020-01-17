import React, { Component } from 'react'
import { Flex, Carousel } from 'antd-mobile'
import BScroll from 'better-scroll'
import './main.scss'
import { houseList, imgUrl } from '../../../api/apis'
export default class Main extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        slideIndex: 2,
        bannerList: [
            require('../../../assets/images/banner_1.jpg'),
            require('../../../assets/images/banner_2.jpeg'),
            require('../../../assets/images/banner_3.jpg'),
            require('../../../assets/images/banner_4.jpg'),
        ],
        navList: [{ icon: 'icon_nav_0.png', text: '新房' },
        { icon: 'icon_nav_1.png', text: '二手房' },
        { icon: 'icon_nav_2.png', text: '新房' },
        { icon: 'icon_nav_3.png', text: '写字楼' },
        { icon: 'icon_nav_4.png', text: '租房' },
        { icon: 'icon_nav_5.png', text: '海外房产' },
        { icon: 'icon_nav_6.png', text: '小区房价' },
        { icon: 'icon_nav_7.png', text: '问答' }],
        houseList: [],
        localCity: "定位中"
    }
    render() {
        return (
            <div className='main' id='main'>
                <ul className='content'>
                    <div className='header'>
                        <Flex justify='between' alignContent='center' align='center'>
                            <label className='place' onClick={this.topClick.bind(this, '#/city')}>{this.state.localCity}▼</label>
                            <div className='serch' onClick={this.topClick.bind(this, '#/search')}>
                                <img src={require('../../../assets/images/icon_serch.png')} width='24' />
                                <label className='serchword'>看好房，上房源APP</label>
                            </div>
                            <img src={require('../../../assets/images/icon_map.png')} className='map' onClick={this.topClick.bind(this, '#/address')}></img>
                        </Flex>
                    </div>
                    <div className='banner'>
                        <Carousel
                            autoplay={true}
                            infinite
                        >
                            {this.state.bannerList.map(val => (
                                <a
                                    key={val}
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        src={val}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top', height: 200 }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                    </div>
                    <div className='icon-navlist'>
                        {this.state.navList.map((e, i) => {
                            return (<a href='#' key={i}>
                                <div>
                                    <div className={`icon-nav${i} icon-nav`}>
                                        <img src={require('../../../assets/images/' + e.icon)} width='30' />
                                    </div>
                                </div>
                                <p className='icon-name'>{e.text}</p>
                            </a>

                            )
                        })}

                    </div>
                    <div className='mid'>
                        <div className='mid-title'>
                            <h3 className='mid-titlename'>房产全百科</h3><span>专业买房攻略</span>
                        </div>
                        <div className='mid-nav'>
                            <div>
                                <img src={require('../../../assets/images/icon_nav_8.png')} width='46' />
                                <p className='mid-nav-name'>我要贷款</p>
                            </div>
                            <div>
                                <img src={require('../../../assets/images/icon_nav_9.png')} width='46' />
                                <p className='mid-nav-name'>我要贷款</p>
                            </div>
                            <div>
                                <img src={require('../../../assets/images/icon_nav_10.png')} width='46' />
                                <p className='mid-nav-name'>我要贷款</p>
                            </div>
                            <div>
                                <img src={require('../../../assets/images/icon_nav_11.png')} width='46' />
                                <p className='mid-nav-name'>我要贷款</p>
                            </div>
                        </div>
                    </div>
                    <div className='house-list'>
                        <p className='house-list-title'>猜你喜欢</p>
                        {this.state.houseList.map((e, i) => {
                            return (
                                <a href='#/houseinfo' key={i}>
                                    <div className='list'>
                                        <div className='left'>
                                            <img src={imgUrl() + e.imgs} width='100' height='80' />
                                            <div className='message'>
                                                <h3 className='name'>{e.name}</h3>
                                                <p className='address'><span>{e.area}</span><span style={{ marginLeft: 6 }}>{e.range}</span></p>
                                                <p className='apartment'><span>{e.type}</span><span style={{ marginLeft: 6 }}>{e.point}平米</span></p>
                                            </div>
                                        </div>
                                        <div className='right'>
                                            {e.price}/平
                                </div>
                                    </div>
                                </a>
                            )
                        })}

                    </div>
                </ul>
            </div>
        )
    }
    componentDidMount() {
        houseList().then(data => {
            this.setState({ houseList: data.data })
        })
        // 定位
        showCityInfo();
        let _this = this
        function showCityInfo() {
            //实例化城市查询类
            var citysearch = new window.AMap.CitySearch();
            //自动获取用户IP，返回当前城市
            citysearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        var cityinfo = result.city;
                        var citybounds = result.bounds;
                        // 设置当前城市
                        _this.setState({ localCity: cityinfo })
                        // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                        //地图显示当前城市
                        // map.setBounds(citybounds);
                    }
                } else {
                    _this.setState({ localCity: result.info })
                    // document.getElementById('info').innerHTML = result.info;
                }
            });
        }
        // 调用better-scroll
        new BScroll('#main',{click:true})
    }
    topClick(val) {
        window.location.href = val
    }
    componentWillUnmount() {
        this.setState = () => { return }
    }
}
