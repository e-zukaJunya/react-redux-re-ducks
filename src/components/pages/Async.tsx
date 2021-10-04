import { Button } from '@material-ui/core'
import { testAsync, testGet } from 'modules/samples/operations'
import React from 'react'
import { useDispatch } from 'react-redux'

const Async = () => {
    const dispatch = useDispatch()
    // 初期処理
    const justAsync = async () => {
        dispatch(testAsync())
        dispatch(testGet('test'))
    }
    return (
        <div>
            <h1>非同期処理</h1>
            <Button onClick={justAsync}>非同期処理</Button>
        </div>
    )
}

export default React.memo(Async)
