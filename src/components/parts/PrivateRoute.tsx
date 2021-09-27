import { pagePath } from 'constants/paths'
import { useNavigateToLogin } from 'hooks/common/routingHooks'
import { hasAuthenticatedSelector } from 'modules/users/selectors'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { SKIP_LOGIN } from 'setttings/settings'

// 認証済みユーザーのみ訪れるページ
const PrivateRoute = (props: RouteProps) => {
    // 認証状態の取得
    // ログイン不要設定なら状態を問わずtrue
    const hasAuthenticated = SKIP_LOGIN ? true : useSelector(hasAuthenticatedSelector)

    const nav = useNavigateToLogin()
    !hasAuthenticated && nav()
    console.log(hasAuthenticated);

    //未認証ならログインページへリダイレクト
    return hasAuthenticated ? <Route {...props} /> : <Redirect to={pagePath.LOGIN} />
}

export default React.memo(PrivateRoute)
