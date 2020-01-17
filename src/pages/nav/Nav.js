import React, { Component } from 'react'
import './nav.scss'
import { TabBar,} from 'antd-mobile'
import Main from './main/Main'
import Chat from './chat/Chat'
import History from './history/History'
import Mine from './mine/Mine'
export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Main',
            navList:[{name:'首页',key:'Main',icon:'icon_home_1.png',selectedIcon:'icon_home.png'},
            {name:'微聊',key:'Chat',icon:'icon_chat_1.png',selectedIcon:'icon_chat.png'},
            {name:'足迹',key:'History',icon:'icon_history_1.png',selectedIcon:'icon_history.png'},
            {name:'我的',key:'Mine',icon:'icon_mine_1.png',selectedIcon:'icon_mine.png'}]
        };
    }

    renderContent(val) {
        switch (val) {
            case 'Main':
                return <Main />
                break;
            case 'Chat':
                return <Chat></Chat>
                break;
            case 'History':
                return <History></History>
                break;
            case 'Mine':
                return <Mine></Mine>
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <div className='Nav'>
                <div style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 }}>
                    <TabBar
                        unselectedTintColor="#949494"//未选中字体颜色
                        tintColor="#62AB00"//选中字体颜色
                        barTintColor="white"
                    >
                        {this.state.navList.map(e=>{
                            return (<TabBar.Item
                                title={e.name}
                                key={e.key}
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require('../../assets/images/'+e.icon)}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selectedIcon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require('../../assets/images/'+e.selectedIcon)}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selected={this.state.selectedTab === e.key}
                                // badge={1}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: e.key,
                                    });
                                }}
                                data-seed="logId"
                            >
                                {this.renderContent(e.key)}
    
                            </TabBar.Item>

                            )
                        })}
                        
                    </TabBar>
                </div>
            </div>
        );
    }
}


