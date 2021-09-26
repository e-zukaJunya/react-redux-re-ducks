import axios, { AxiosError, AxiosResponse } from 'axios'
import { ENV } from 'setttings/settings'

// 共通設定
export const axiosInstance = axios.create({
    baseURL: ENV.API_URL,
    withCredentials: true,
})
// リクエスト前処理
axiosInstance.interceptors.request.use(
    // 前処理
    async (config) => {
        config.httpsAgent = {
            KeepAlive: true,
        }
        // todo cognitoとか使うならトークンの取得
        // const token = (await Auth.currentSession()).getIdToken().getJwtToken();
        const token = 'token'
        config.headers.Authorization = `Bearer ${token}`
        return config
    }
)

//レスポンス処理（何もしない）
axiosInstance.interceptors.response.use((response) => response)

//catch時の型指定
const errorCallback = <T>(err: AxiosError<T>) => err

/**
 * API呼び出し処理(GET)
 * @param path APIのパス
 * @param option ヘッダーとクエリパラメータがある場合は指定
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiGetRequest = async <T, U>(path: string, option: { header?: any; queryPram?: any } = {}) => {
    return await axiosInstance
        .get<T>(path, {
            params: option.queryPram,
            headers: option.header,
        })
        .catch((err) => errorCallback<U>(err))
}

/**
 * API呼び出し処理(POST)
 * @param path APIのパス
 * @param option ヘッダー、クエリパラメータ、ボディがある場合は指定
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiPostRequest = async <T, U>(
    path: string,
    option: { header?: any; queryPram?: any; body?: any } = {}
) => {
    return await axiosInstance
        .post<T>(path, option.body, {
            params: option.queryPram,
            headers: option.header,
        })
        .catch((err) => errorCallback<U>(err))
}

/**
 * API呼び出し処理(PUT)
 * @param path APIのパス
 * @param option ヘッダー、クエリパラメータ、ボディがある場合は指定
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiPutRequest = async <T, U>(path: string, option: { header?: any; queryPram?: any; body?: any } = {}) => {
    return await axiosInstance
        .put<T>(path, option.body, {
            params: option.queryPram,
            headers: option.header,
        })
        .catch((err) => errorCallback<U>(err))
}

/**
 * API呼び出し処理(DELETE)
 * @param path APIのパス
 * @param option ヘッダーとクエリパラメータがある場合は指定
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const apiDeleteRequest = async <T, U>(
    path: string,
    option: { header?: any; queryPram?: any } = {}
): Promise<AxiosResponse<T> | AxiosError<U>> => {
    return await axiosInstance
        .delete<T>(path, {
            params: option.queryPram,
            headers: option.header,
        })
        .catch((err) => errorCallback<U>(err))
}
