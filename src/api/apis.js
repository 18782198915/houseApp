import Axios from 'axios'
import qs from 'qs'
let $http=Axios.create({
    baseURL:'http://localhost:80/',
    // baseURL:'http://172.20.10.9:80/',//华川
    timeout:10000
})
export const imgUrl=()=>{
    return $http.defaults.baseURL
}
// 登录
export const login=(acc,pwd)=>{
    return $http.post('login.php',qs.stringify({acc,pwd}))
}
// 注册
export const reg=(acc,pwd)=>{
    return $http.post('reg.php',qs.stringify({acc,pwd}))
}
// 验证码
export const valite=()=>{
    return $http.get('valitecode.php')
}
// 房产列表
export const houseList=()=>{
    return $http.get('gethouselist.php')
}

