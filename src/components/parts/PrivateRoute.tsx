import { pagePath } from 'constants/paths'
import { hasAuthenticatedSelector } from 'modules/users/selectors'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'

// 認証済みユーザーのみ訪れるページ
const PrivateRoute = (props: RouteProps) => {
    const hasAuthenticated = useSelector(hasAuthenticatedSelector)
    // 認証済みならトップページへリダイレクト
    return hasAuthenticated ? <Route {...props} /> : <Redirect to={pagePath.ROOT} />
}

export default React.memo(PrivateRoute)
