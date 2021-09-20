import {AppDispatch} from 'store/configureStore'

export interface SetUsers {
    id: number,
    name: string
}

/**
 * APIリクエスト: ログイン
 */
export interface requestAuthLogin {
    loginID: string,
    password: string
}

/**
 * APIリクエスト: パスワード変更
 */
export interface requestAuthPasswordChange {
    oldPassword: string,
    newPassword: string,
    dispatch: AppDispatch,
    doClose: () => void,
}

/**
 * APIレスポンス: エラー
 */
export interface responseError {
    apiResultMessage: string
}
