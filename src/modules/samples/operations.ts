import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from 'common/httpClient'
import { ApiError } from 'common/types'
import { apiPath } from 'constants/paths'
import { RootState } from 'store/configureStore'
import { hogeRes } from './types'

// 非同期処理系ロジックを記載
// ほぼAPI呼び出しと、その後の処理

// createAsyncThunkの型引数は、第2引数の関数の返却型、第2引数の関数の第1引数の型、第2引数の関数の第2引数の型
// 第2引数の関数の第1引数はこの処理をdispatchするときの引数
export const testGet = createAsyncThunk<number, string, { state: RootState }>(
    'samples/testGet',
    async (userId, thunkApi) => {
        const response = await axiosInstance.get<hogeRes, ApiError>(apiPath.SAMPLE)
        console.log(response)

        // 失敗の挙動をさせたい場合はこの中でエラーを発生させるとrejectedのActionを起動することができる
        // throw new Error();

        return 0
    }
)

// ただの非同期処理
export const testAsync = createAsyncThunk<number>('samples/testAsync', async () => {
    await new Promise((resolve) => {
        //1秒後に実行する処理
        setTimeout(() => {
            console.log('0.5秒後ログ')
            resolve(null)
        }, 500)
    })
    return 1
})
