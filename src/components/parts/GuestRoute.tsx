import { pagePath } from 'constants/paths'
import { hasAuthenticatedSelector } from 'modules/users/selectors'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'

// 未認証ユーザーのみ訪れるページ
const GuestRoute = (props: RouteProps) => {
    const hasAuthenticated = useSelector(hasAuthenticatedSelector)
    // 未認証ならログインへリダイレクト
    return hasAuthenticated ? <Route {...props} /> : <Redirect to={pagePath.LOGIN} />
}

export default React.memo(GuestRoute)
