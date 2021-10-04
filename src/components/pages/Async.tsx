import { Button } from '@material-ui/core'
import { testAsync, testGet } from 'modules/samples/operations'
import React from 'react'
import { useDispatch } from 'react-redux'

const Async = () => {
    const dispatch = useDispatch()
    // 初期処理
    const justAsync = () => {
        dispatch(testAsync())
    }
    const fetchApi = () => {
        dispatch(testGet('test'))
    }
    return (
        <div>
            <h1>非同期処理</h1>
            <Button onClick={justAsync}>0.5秒待つだけ</Button>
            <Button onClick={fetchApi}>API呼び出し</Button>
        </div>
    )
}

export default React.memo(Async)
