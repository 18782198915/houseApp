import React, { Component } from 'react'
import CityList from '../../../json/city.json'
import BScroll from 'better-scroll'
import './city.scss'
export default class MyCity extends Component {
    render() {
        return (
            <div className='city'>
                <div className='left' id='citylist'>
                    <ul className='content'>
                        {CityList.map((e, i) => {
                            return (<div key={i} id={e.name}>
                                <h3>{e.name}</h3>
                                {e.cities.map((element, j) => {
                                    return (<p key={j}>
                                        {element}
                                    </p>)
                                })}
                            </div>)
                        })}
                    </ul>
                </div>
                <div className='right' >
                    {CityList.map((e, i) => {
                        return (<p className='list' onTouchMove={this.move.bind(this)}  key={i} onClick={this.handle.bind(this,e.name)}>
                            {e.name}
                        </p>)
                    })}
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.leftScroll=new BScroll('#citylist')
    }
    handle(val){
        console.log('#'+val)
        this.leftScroll.scrollToElement('#'+val,1000)
    }
    move(e){
        // console.log(e.touches[0].clientX)
        // console.log(e.touches[0].clientY)
        // console.log(e)
        let ele=document.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY)
        // console.log(ele.className)
        if(ele.className=='list'){
            this.leftScroll.scrollToElement('#'+ele.innerHTML,500)
        }
        // console.log(ele)
    }
}
