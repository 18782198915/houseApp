import React, { Component } from 'react'
import { SearchBar,Tag } from 'antd-mobile'
import './search.scss'
export default class Search extends Component {
    state = {
        serachWords: '',
        serchHistory:[]
    }
    render() {
        let { serachWords,serchHistory } = this.state
        return (
            <div style={{width:'100%'}}>
                <div className='top'>
                    <img onClick={() => { window.location.href = '#/' }} src={require('../../../assets/images/icon_back.png')} className='back'></img>
                    <SearchBar
                        maxLength={8}
                        cancelText='搜索'
                        value={serachWords}
                        placeholder="Search"
                        showCancelButton
                        onChange={e => { this.setState({ serachWords: e }) }}
                        onCancel={this.search.bind(this)}
                    />
                </div>
                <div className='history-list'>
                {/* {serchHistory.map((e,i)=>{
                    return (<div key={i} className='history'>
                        {e}
                    </div>)
                })} */}
                {serchHistory.map((e,i)=>{
                    return (<div key={i} className='history'><Tag data-seed="logId">{e}</Tag></div>)
                })}
                </div>
            </div>
        )
    }
    search(){
        let {serachWords}=this.state
        if(serachWords=='') return
        let serchHistory = JSON.parse(localStorage.getItem('serchHistory') || "[]");
        serchHistory.unshift(serachWords)
        localStorage.setItem('serchHistory',JSON.stringify(serchHistory))
    }
    componentWillMount(){
        let serchHistory = JSON.parse(localStorage.getItem('serchHistory') || "[]");
        this.setState({serchHistory:serchHistory})
    }
}
