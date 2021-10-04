export interface SampleState {
    personList: Persons[]
}

export interface Persons {
    id: number
    name: string
}

/**
 * APIリクエスト: ログイン
 */
export interface requestAuthLogin {
    loginID: string
    password: string
}
