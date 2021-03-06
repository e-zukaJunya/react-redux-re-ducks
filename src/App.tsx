import LuxonUtils from '@date-io/luxon'
import { StylesProvider } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import Async from 'components/pages/Async'
import Forms from 'components/pages/Forms'
import IgnoreAuth from 'components/pages/IgnoreAuth'
import Login from 'components/pages/Login'
import Other from 'components/pages/Other'
import Sample from 'components/pages/Sample'
import Table from 'components/pages/Table'
import CommonDialog from 'components/parts/CommonDialog'
import AppFooter from 'components/parts/Footer'
import GuestRoute from 'components/parts/GuestRoute'
import AppHeader from 'components/parts/Header'
import Loader from 'components/parts/Loader'
import PrivateRoute from 'components/parts/PrivateRoute'
import { pagePath } from 'constants/paths'
import { closeGlobalDialog } from 'modules/pages/reducers'
import { dialogSelector } from 'modules/pages/selectors'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { AppDispatch } from 'store/configureStore'
import styles from 'styles/app.module.scss'

// アプリの中で最上位の配置を担う
// ページルーティングの設定もここで
const App: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const dialogState = useSelector(dialogSelector)

    return (
        <StylesProvider injectFirst>
            {/*Material UIのDatePickerをLuxonで使用したいためこれで囲う*/}
            <MuiPickersUtilsProvider utils={LuxonUtils}>
                <div className={styles.app}>
                    <AppHeader />
                    <div className={styles.mainContent}>
                        <Switch>
                            {/* 未認証の時のみ表示 */}
                            <GuestRoute exact path={pagePath.LOGIN} key={pagePath.LOGIN} component={Login} />
                            {/* 認証済みの時のみ表示 */}
                            <PrivateRoute exact path={pagePath.ROOT} key={pagePath.ROOT} component={Sample} />
                            {/* 子でさらにページをレンダリングするならexactにしない */}
                            <PrivateRoute path={pagePath.FORMS} key={pagePath.FORMS} component={Forms} />
                            <PrivateRoute path={pagePath.TABLE} key={pagePath.TABLE} component={Table} />
                            <PrivateRoute exact path={pagePath.ASYNC} key={pagePath.ASYNC} component={Async} />
                            <PrivateRoute exact path={pagePath.OTHER} key={pagePath.OTHER} component={Other} />
                            {/* 認証状態を問わず表示 */}
                            <Route
                                exact
                                path={pagePath.IGNORE_ATUH}
                                key={pagePath.IGNORE_ATUH}
                                component={IgnoreAuth}
                            />
                            {/* 存在しないパスの時はログインへ */}
                            <GuestRoute component={Login} />
                        </Switch>
                    </div>
                    <AppFooter />

                    {/*Loader*/}
                    <Loader />

                    {/*表示するだけの通知ポップアップ*/}
                    <CommonDialog
                        open={dialogState.open}
                        title={dialogState.title}
                        mainText={dialogState.mainText}
                        cancelLabel={'閉じる'}
                        onClose={() => dispatch(closeGlobalDialog())}
                        notif
                    />
                </div>
            </MuiPickersUtilsProvider>
        </StylesProvider>
    )
}

export default App
