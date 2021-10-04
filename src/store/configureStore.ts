import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import pagesReducer from 'modules/pages/reducers'
import samplesReducer from 'modules/samples/reducers'
import usersReducer from 'modules/users/reducers'
import { createLogger } from 'redux-logger'
import { ENV } from 'setttings/settings'

//historyを作成
export const history = createBrowserHistory()

// 各reducerをひとまとめに
export const rootReducer = combineReducers({
    users: usersReducer,
    pages: pagesReducer,
    sample: samplesReducer,
    router: connectRouter(history),
})

// root reducerの持つstateの型
export type RootState = ReturnType<typeof rootReducer>

// redux-loggerの設定
const logger = createLogger({
    level: 'info',
    // 情報は閉じて置く
    collapsed: true,
    // loggerを効かせるかどうか(本番環境では非適用)
    predicate: () => ENV.DEBUG,
    // 何が変わったか
    diff: true,
})

// storeの設定
export const store = configureStore({
    // reducerの適用
    reducer: rootReducer,
    // redux関連middlewareの適用
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(routerMiddleware(history)),
})

// storeの持つdispatcherの型
export type AppDispatch = typeof store.dispatch
