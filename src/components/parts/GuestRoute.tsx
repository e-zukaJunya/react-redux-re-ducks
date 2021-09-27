import { useGuestRouting } from 'hooks/common/routingHooks'
import { hasAuthenticatedSelector } from 'modules/users/selectors'
import React from 'react'
import { useSelector } from 'react-redux'
import { Route, RouteProps } from 'react-router-dom'
import { SKIP_LOGIN } from 'setttings/settings'

// 未認証ユーザーのみ訪れるページ
const GuestRoute = (props: RouteProps) => {
    // 認証状態によって表示するページをコントロール
    useGuestRouting()

    // 上記の処理を入れても一瞬マウントされるので、それまで何も表示しないよう対応
    const hasAuthenticated = SKIP_LOGIN ? false : useSelector(hasAuthenticatedSelector)
    return hasAuthenticated ? <></> : <Route {...props} />
}

export default React.memo(GuestRoute)
