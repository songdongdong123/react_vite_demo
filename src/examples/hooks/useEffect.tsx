import { useState, useEffect } from "react";
import axios from "axios";
import { Divider, List, Typography } from 'antd'; 
/**
 * useEffec用来处理副作用
 * 使用场景：
 *  1. 当渲染完成时，做某些事情（相当于组件mount）；
 *  2. 当某个state发生变化时，做某些事情（相当于watch）；
 *  3. 当组件销毁时，做某些事情（相当于unmount）；
 *  3. 发气ajax请求；
 * 开发环境存在的问题：
 *  在v18版本中，useEffect在严格模式下会被执行两次（其中一次是，模拟组件卸载的）
 * 解决方案：
 *  1. 不使用严格模式
 * 注意事项：
 *  如果有定时任务，或者 DOM 事件，组件销毁时一定要解绑
 */ 
type Record = {
    name: string;
    gender: string;
    hobbies: string[];
    age: string;
}
const UseEffectCom:React.FC = () => {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        console.log('组件创建了')
        axios.get('/api/users').then(res => {
            // console.log(res)
            if (res.status === 200) {
                setRecords(res.data.date.records)
            }
        })
        return () => {
            console.log('组件卸载了');
        }
    }, [])
    return (
        <>
            <Divider orientation="left">useEffect的基本使用</Divider>
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={records}
                renderItem={(item: Record) => (
                    <List.Item>
                    <Typography.Text mark>[ITEM]</Typography.Text> {item.name}
                    </List.Item>
                )}
                />
        </>
    )
}

export default UseEffectCom;