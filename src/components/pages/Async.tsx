import { Button } from '@material-ui/core'
import React from 'react'

const Async = () => {
    // 初期処理
    
    return (
        <div>
            <h1>非同期処理</h1>
            <Button>非同期処理</Button>
        </div>
    )
}

export default React.memo(Async)
