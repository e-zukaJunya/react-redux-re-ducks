import { useBooleanState } from 'hooks/common/commonHooks'
import React from 'react'

const RadioEx = () => {
    // 真偽値のtoggleサンプル
    const [active, setter] = useBooleanState(false)

    return <div></div>
}

export default React.memo(RadioEx)