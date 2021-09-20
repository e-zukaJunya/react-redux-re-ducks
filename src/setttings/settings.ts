// ビルド時のステージごとの名称
const stages = {
    LOCAL: 'local',
    DEV: 'dev',
    STG: 'stg',
    PROD: 'prod',
}

//環境変数をオブジェクトにまとめておく
export const env = {
    API_URL: process.env.REACT_APP_API_URL,
    cognito: '',
    AWS_REGION: process.env.REACT_APP_REGION,
    COGNITO_USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    COGNITO_WEB_CLIENT_ID: process.env.REACT_APP_WEB_CLIENT_ID,
    COGNITO_ENDPOINT: process.env.REACT_APP_ENDPOINT,
    // 本番以外デバッグモードとしておく
    DEBUG:
        process.env.REACT_APP_STAGE === stages.LOCAL ||
        process.env.REACT_APP_STAGE === stages.DEV ||
        process.env.REACT_APP_STAGE === stages.STG,
}

// amplifyに渡す情報(cognito用)
export const AWS_CONFIG = {
    Auth: {
        region: env.AWS_REGION,
        userPoolId: env.COGNITO_USER_POOL_ID,
        userPoolWebClientId: env.COGNITO_WEB_CLIENT_ID,
        storage: localStorage,
    },
    API: {
        endpoints: [
            {
                endpoint: env.COGNITO_ENDPOINT,
                region: env.AWS_REGION,
            },
        ],
    },
}
