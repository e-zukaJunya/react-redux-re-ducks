import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import reportWebVitals from 'reportWebVitals'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { history, store } from 'store/configureStore'
import { AWS_CONFIG, env } from 'setttings/settings'
// import {Amplify} from 'aws-amplify'
import { ConnectedRouter } from 'connected-react-router'

// Amplifyの設定適用
// Amplify.configure(AWS_CONFIG)

// HTMLにReactで作成したページを流し込む部分
ReactDOM.render(
    // redux storeの中身をコンポーネント内で参照できるようにするため必要
    <Provider store={store}>
        {/*connected-react-routerを使用するために必要*/}
        <ConnectedRouter history={history}>
            <Route path="*/" component={App} />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

// Web vitalの表示
env.DEBUG && reportWebVitals(console.log)
