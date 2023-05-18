import {
    UseStateCom,
    UseReducerCom,
    UseEffectCom,
    UseContextCom,
    UseCallbackCom,
    UseRefCom,
    ClosureTrap
} from '../../examples/hooks';

import CssModule from '../../examples/cssModule';

const Example:React.FC = () => {
    return (
        <div style={{paddingBottom: 300}}>
            <h1>相关案例demo展示</h1>
            <UseStateCom />
            <UseReducerCom />
            <UseEffectCom />
            <UseContextCom />
            <UseCallbackCom />
            <UseRefCom />
            <ClosureTrap />
            <CssModule />
        </div>
    )
}

export default Example;