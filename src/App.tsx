import LuxonUtils from '@date-io/luxon'
import { StylesProvider } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import Login from 'components/pages/Login'
import Other from 'components/pages/Other'
import Sample from 'components/pages/Sample'
import Progress from 'components/parts/Progress'
import { pagePath } from 'constants/paths'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppHeader from 'components/parts/Header'
import CommonDialog from 'components/parts/CommonDialog'
import { useDispatch, useSelector } from 'react-redux'
import { noticeDialogSelector } from 'modules/pages/selectors'
import { closeNoticeDialog } from 'modules/pages/reducers'
import { AppDispatch } from 'store/configureStore'
import styles from 'styles/common/app.module.scss'
import AppFooter from 'components/parts/Footer'
import Forms from 'components/pages/Forms'
import List from 'components/pages/List'

// export const getId = async () => await Auth.currentAuthenticatedUser();

// アプリの中で最上位の配置を担う
// ページルーティングの設定もここで
const App: React.FC = () => {
    const dialogState = useSelector(noticeDialogSelector)
    const dispatch: AppDispatch = useDispatch()
    // todo storeへ
    // const history = useHistory();
    // const location = useLocation();
    // const res = useSelector((state: RootState) => ({
    //     loginDate: state.common.loginDate,
    //     isLoading: state.common.isLoading
    // }), shallowEqual);
    // const isLoading = res.isLoading;
    return (
        <StylesProvider injectFirst>
            {/*Material UIのDatePickerをLuxonで使用したいためこれで囲う*/}
            <MuiPickersUtilsProvider utils={LuxonUtils}>
                <div className={styles.app}>
                    <AppHeader />
                    <Switch>
                        <Route exact path={pagePath.ROOT} key={pagePath.ROOT} component={Sample} />
                        <Route exact path={pagePath.LOGIN} key={pagePath.LOGIN} component={Login} />
                        <Route exact path={pagePath.PAGE2} key={pagePath.PAGE2} component={Forms} />
                        <Route exact path={pagePath.PAGE3} key={pagePath.PAGE3} component={List} />
                        <Route exact path={pagePath.OTHER} key={pagePath.OTHER} component={Other} />
                    </Switch>
                    <AppFooter />

                    {/*Progress ring*/}
                    <Progress />

                    {/*表示するだけの通知ポップアップ*/}
                    <CommonDialog
                        open={dialogState.open}
                        confirm
                        mainMessage={dialogState.mainMessage}
                        closeButtonMessage={dialogState.closeButtonMessage}
                        doDisagree={() => dispatch(closeNoticeDialog())}
                    />
                </div>
            </MuiPickersUtilsProvider>
        </StylesProvider>
    )
}

export default App
