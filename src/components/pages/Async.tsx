import { Button } from '@material-ui/core'
import { useGetSample, useInit, useJustAsync, useRejectSample, useRejectWithValue } from 'hooks/async/asyncHooks'
import React from 'react'

const Async = () => {
    // 初期処理
    useInit()

    // 0.5秒待つだけの非同期処理を動かす関数
    const onClickJustAsync = useJustAsync()
    // 例外起こすサンプル
    const onClickReject = useRejectSample()
    // rejectWithValueのサンプル
    const onClickRejectWithValue = useRejectWithValue()

    // API実行のサンプル
    const onClickApiTest = useGetSample()

    return (
        <div>
            <h1>非同期処理</h1>
            <Button onClick={onClickJustAsync}>0.5秒待つだけ</Button>
            <Button onClick={onClickApiTest}>API呼び出し</Button>
            <Button onClick={onClickReject}>reject</Button>
            <Button onClick={onClickRejectWithValue}>RejectWithValue</Button>
            <p>コンソール見て</p>
        </div>
    )
}

export default React.memo(Async)
