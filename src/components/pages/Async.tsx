import { Button } from '@material-ui/core'
import { useGetSample, useJustAsync, useRejectSample, useRejectWithValue } from 'hooks/async/asyncHooks'
import React from 'react'

const Async = () => {
    // 初期処理

    // 0.5秒待つだけの非同期処理を動かす関数
    const onClickJustAsync = useJustAsync()
    // rejectのサンプル
    const onClickReject = useRejectSample()
    // API実行のサンプル
    const onClickApiTest = useGetSample()

    const onClickRejectWithValue = useRejectWithValue()

    return (
        <div>
            <h1>非同期処理</h1>
            <Button onClick={onClickJustAsync}>0.5秒待つだけ</Button>
            <Button onClick={onClickApiTest}>API呼び出し</Button>
            <Button onClick={onClickReject}>reject</Button>
            <Button onClick={onClickRejectWithValue}>RejectWithValue</Button>
        </div>
    )
}

export default React.memo(Async)
