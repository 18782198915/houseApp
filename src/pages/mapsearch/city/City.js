import React, { Component } from 'react'
export default class City extends Component {
  render() {
    return (
      <div>
      </div>
    )
  }
  componentDidMount() {

    //设置DomLibrary
    // window.AMapUI.setDomLibrary(Zepto);

    //加载MobiCityPicker，loadUI的路径参数为模块名中 'ui/' 之后的部分
    window.AMapUI.loadUI(['misc/MobiCityPicker'], function (MobiCityPicker) {

      var cityPicker = new MobiCityPicker({
        //topGroups: ..., // 顶部城市列表
      });

      //监听城市选中事件
      cityPicker.on('citySelected', function (cityInfo) {
        //隐藏城市列表
        cityPicker.hide();

        //选中的城市信息
        console.log(cityInfo);
      });
      cityPicker.on('hide', function(cityInfo) {
                  // 返回
                  window.history.go(-1)
                })
      //显示城市列表，可以用某个click事件触发
      cityPicker.show();
    });
  }
}
