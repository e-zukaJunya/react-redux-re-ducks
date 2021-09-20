// その他固定値を定義

// 例
export const HOGE_CONST = 1

// 日付の書式指定文字列
export const dtFormats = {
    AAA: 'yyyy/MM/dd'
}

// 入力チェック桁数
export const digitLimits = {
    MAIL_ADDRESS: {MIN: 1, MAX: 256},
    PASSWORD: {MIN: 8, MAX: 16},
    USER_NAME: {MIN: 1, MAX: 100},
}

// 共通.Httpステータスコード
export const httpStatusCode = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
}
