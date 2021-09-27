import App from 'App'
// import {Amplify} from 'aws-amplify'
import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import reportWebVitals from 'reportWebVitals'
import 'ress'
import { ENV } from 'setttings/settings'
import { history, store } from 'store/configureStore'

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
ENV.DEBUG && reportWebVitals(console.log)
