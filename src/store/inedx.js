import {createStore} from 'redux'
let store = createStore(function(state,action){
console.log(state,action)
switch (action.type) {
    case 'changeNum': return state+action.num
        
        break;

    default: return 0
        break;
}
return 0
})
function changeNum(num){
    return {
        type:'changeNum',
        num
    }
}
store.dispatch(changeNum(19))
console.log(store.getState())
