import { pagePath } from 'constants/paths'
import { useNavigateToTop } from 'hooks/common/routingHooks'
import { hasAuthenticatedSelector } from 'modules/users/selectors'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { SKIP_LOGIN } from 'setttings/settings'

// 未認証ユーザーのみ訪れるページ
const GuestRoute = (props: RouteProps) => {
    // 認証状態の取得
    // ログイン不要設定なら状態を問わずfalse
    const hasAuthenticated = SKIP_LOGIN ? false : useSelector(hasAuthenticatedSelector)
    const nav = useNavigateToTop()
    hasAuthenticated && nav()
    console.log(hasAuthenticated);
    // 認証済みならログインへリダイレクト
    return hasAuthenticated ? <Redirect to={pagePath.LOGIN} /> : <Route {...props} />
}

export default React.memo(GuestRoute)
