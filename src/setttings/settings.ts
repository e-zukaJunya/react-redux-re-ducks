// ビルド時のステージごとの名称
const STAGES = {
    LOCAL: 'local',
    DEV: 'dev',
    STG: 'stg',
    PROD: 'prod',
}

//環境変数をオブジェクトにまとめておく
export const ENV = {
    API_URL: process.env.REACT_APP_API_URL,
    cognito: '',
    AWS_REGION: process.env.REACT_APP_REGION,
    COGNITO_USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    COGNITO_WEB_CLIENT_ID: process.env.REACT_APP_WEB_CLIENT_ID,
    COGNITO_ENDPOINT: process.env.REACT_APP_ENDPOINT,
    // 本番以外デバッグモードとしておく
    DEBUG:
        process.env.REACT_APP_STAGE === STAGES.LOCAL ||
        process.env.REACT_APP_STAGE === STAGES.DEV ||
        process.env.REACT_APP_STAGE === STAGES.STG,
}

// amplifyに渡す情報(cognito用)
export const AWS_CONFIG = {
    Auth: {
        region: ENV.AWS_REGION,
        userPoolId: ENV.COGNITO_USER_POOL_ID,
        userPoolWebClientId: ENV.COGNITO_WEB_CLIENT_ID,
        storage: localStorage,
    },
    API: {
        endpoints: [
            {
                endpoint: ENV.COGNITO_ENDPOINT,
                region: ENV.AWS_REGION,
            },
        ],
    },
}

export const SKIP_LOGIN = process.env.REACT_APP_STAGE === STAGES.LOCAL
