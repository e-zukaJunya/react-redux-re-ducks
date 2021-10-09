import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from 'common/httpClient'
import { ApiError, AsyncThunkConfig } from 'common/types'
import { apiPath } from 'constants/paths'
import { setPseudoAuth } from 'modules/users/reducers'
import { RootState } from 'store/configureStore'
import { hogeRes } from './types'

// 非同期処理系ロジックを記載
// ほぼAPI呼び出しと、その後の処理

// createAsyncThunkの型引数は、第2引数の関数の返却型、第2引数の関数の第1引数の型、thunkAPI(第2引数の関数の第二引数としてとれるオブジェクト)の型
// 第2引数の関数の第1引数はこの処理をdispatchするときの引数
export const testGet = createAsyncThunk<number, string, AsyncThunkConfig>(
    // dispatchされるActionの名前
    // 極論何でもいいが Storeの名前/関数の名前 でいいかと
    'samples/testGet',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (userId, thunkAPI) => {
        console.log(userId)
        const response = await axiosInstance.get<hogeRes, ApiError>(apiPath.SAMPLE)
        console.log(response)
        return 0
    }
)

// ただの非同期処理
export const testAsync = createAsyncThunk<number>('samples/testAsync', async () => {
    await new Promise((resolve) => {
        //指定秒数後に実行する処理
        setTimeout(() => {
            console.log('0.5秒後ログ')
            resolve(null)
        }, 500)
    })
    return 1
})

// rejectの例
export const rejectSample = createAsyncThunk<number>('samples/rejectSample', async () => {
    await new Promise((_, reject) => {
        //指定秒数後に実行する処理
        setTimeout(() => {
            console.log('0.5秒後ログ')
            // 失敗の挙動をさせたい場合はこの中でエラーを発生させるとrejectedのActionを起動することができる
            // promiseだからrejectつかってるけど普通にthrow new Errorとか
            // これみたいに値突っ込むんだったらthrowとかじゃなくてrejectWithValue
            reject('error!!!')
        }, 500)
    })
    return 1
})

// thunkApiの使い方
export const testThunkApi = createAsyncThunk<void, undefined, { state: RootState }>(
    'samples/testThunkApi',
    (_, thunkAPI) => {
        // thunkAPIでRedux操作のAPIが提供される
        thunkAPI.dispatch(setPseudoAuth(true))
        const state = thunkAPI.getState()
        console.log(state)
    }
)

// reject with valueの使い方
export const testRejectWithValue = createAsyncThunk<string, number, AsyncThunkConfig<string>>(
    'samples/testThunkApi',
    (n, thunkAPI) => {
        if (n % 2 === 0) {
            return '偶数はOK'
        } else {
            return thunkAPI.rejectWithValue('奇数はNO')
        }
    }
)
