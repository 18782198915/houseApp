import React, { Component } from 'react'
export default class Address extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div ref="map" id="map" style={{ width: '100%', height: '60%' }}></div>
      </div>
    )
  }
  componentDidMount() {
    // 初始化地图
    var map = new window.AMap.Map("map", {
      resizeEnable: true,
      center: [116.397428, 39.90923],
      zoom: 20
    });
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
            map.setBounds(citybounds);
          
          }
        } else {
          _this.setState({ localCity: result.info })
          // document.getElementById('info').innerHTML = result.info;
        }
      });
    }
  }

}
