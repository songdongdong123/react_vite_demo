import {useReducer} from 'react';
import { Button, Space, Divider } from 'antd';
/**
 * 用户处理负责状态管理，需要对多个值进行操作时，可以使用useReducer
 * useReducer接受三个参数，reducer，initState，init;
 *      reducer: 接受当前的state和action作为参数，返回新的state；类似redux中的reducer；
 *      initState: 初始化状态值，可以是任何类型的值。比如：对象，数组，字符串等等
 *      init: 可选参数，如果有提供，则会覆盖initState。改函数接受一个参数，即初试状态，返回一个新的状态值；
 * useReducer返回值是一个数组，[state, dispatch] = useReducer(reducer, initState)
 *      dispatch: 用于触发一个action，从而更新状态。他接受一个action对象作为参数，对象必须包含一个“type”字段，
 *                和一个可选的payload（表示要更新的数据）字段。
*/
const reducer = function(state:any, action:any) {
    switch(action.type) {
        case 'increment-count':
            return {...state, count: state.count++};
        case 'increment-index':
            return {...state, index: state.index++};
        case 'decrement-count':
            return {...state, count: state.count--};
        case 'decrement-index':
            return {...state, index: state.index--};
        default:
            return state;
    }
}
const initState = {
    count: 0,
    index: 0
};
const UseReducerCom:React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const {count, index} = state;
    return (
        <div>
            <Divider orientation="left">useReducer的基本使用</Divider>
            <div>
                <Space wrap>
                    <Button type="primary" onClick={() => dispatch({type: 'increment-count'})}>增加count+</Button>
                    <Button type="primary" onClick={() => dispatch({type: 'decrement-count'})}>减少count-</Button>
                </Space>
                <p>{count}</p>
            </div>
            <div style={{marginTop: 20}}>
                <Space wrap>
                    <Button type="primary" onClick={() => dispatch({type: 'increment-index'})}>增加index+</Button>
                    <Button type="primary" onClick={() => dispatch({type: 'decrement-index'})}>减少index-</Button>
                </Space>
                <p>{index}</p>
            </div>
        </div>
    )
}

export default UseReducerCom;