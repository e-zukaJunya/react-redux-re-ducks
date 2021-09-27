import { usePrivateRouting } from 'hooks/common/routingHooks'
import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

// 認証済みユーザーのみ訪れるページ
const PrivateRoute = (props: RouteProps) => {
    // 認証状態によって表示するページをコントロール
    const hasAuthenticated = usePrivateRouting()
    // 上記の処理でページのリダイレクトを入れても一瞬マウントされるので、それまで何も表示しないよう対応
    return hasAuthenticated ? <Route {...props} /> : <></>
}

export default React.memo(PrivateRoute)
