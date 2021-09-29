import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from 'store/configureStore'
import { axiosInstance } from 'common/httpClient'
import { apiPath } from 'constants/paths'
import { requestAuthPasswordChange } from 'modules/users/types'
import { toggleProgress } from 'modules/pages/reducers'
import { setPseudoAuth } from 'modules/users/reducers'

interface hogeRes {
    id: number
    name: string
}

// createAsyncThunkの型引数は、第2引数の関数の返却型、第2引数の関数の第1引数の型、第2引数の関数の第2引数の型
// 第2引数の関数の第1引数はこの関数自体の実行時の引数
export const testGet = createAsyncThunk<number, string, { state: RootState }>(
    'user/testGet',
    async (userId, thunkApi) => {
        console.log(userId)

        const response = await axiosInstance
            .get<hogeRes>(apiPath.SAMPLE)
            .then((res) => {
                console.log(res)
                return res
            })
            .catch((err) => {
                // なにか例外処理
                console.log(err)
            })
        // return response.data;

        await new Promise((resolve) => {
            //1秒後に実行する処理
            setTimeout(() => {
                console.log('0.5秒後ログ')
                resolve(null)
            }, 500)
        })

        // 失敗の挙動をさせたい場合はこの中でエラーを発生させるとrejectedのActionを起動することができる
        // throw new Error();

        const kari = 0
        return kari
    }
)

/**
 * パスワード変更API呼出
 */
export const postChangePassword = createAsyncThunk(
    'maintenance/auth/password/change',
    async (request: requestAuthPasswordChange) => {
        //プログレスを表示
        request.dispatch(toggleProgress(true))

        // // パスワード変更処理
        // const res = await apiPostRequest<void, responseError>(apiPath.authChangePassword, {
        //     body: {oldPassword: request.oldPassword, newPassword: request.newPassword}
        // })
        //
        // if (axios.isAxiosError(res)) {
        //     if (res.response?.status == HttpStatusCode.BadRequest) {
        //         //バリデーションエラー
        //         request.dispatch(setNoticePopup({
        //             open: true,
        //             mainMessage: res.response.data.apiResultMessage,
        //         }))
        //     } else if (res.response?.status == HttpStatusCode.Unauthorized) {
        //         //Cognito認証エラー
        //         request.doClose()
        //         request.dispatch(setNoticePopup({
        //             open: true,
        //             mainMessage: 'messages.EMF_0011()',
        //         }))
        //         //ログイン画面に遷移
        //         request.dispatch(push(pagePath.login))
        //     } else {
        //         //その他エラー
        //         request.doClose()
        //         request.dispatch(setNoticePopup({
        //             open: true,
        //             mainMessage: 'messages.EMF_0027()',
        //         }))
        //     }
        // } else {
        //     //パスワード変更成功
        //     request.dispatch(setNoticePopup({
        //         open: true,
        //         mainMessage: 'messages.IMF_0002()',
        //     }))
        //     request.doClose()
        // }

        //プログレスを非表示
        request.dispatch(toggleProgress(false))
    }
)
// <number, string, { state: RootState }>
export const postLogout = createAsyncThunk<void, { state: RootState }>('user/logout', async (thunkApi) => {
    //プログレスを表示
    // thunkApi.dispatch(setPseudoAuth(false))
})
