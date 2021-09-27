import { useGuestRouting } from 'hooks/common/routingHooks'
import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

// 未認証ユーザーのみ訪れるページ
const GuestRoute = (props: RouteProps) => {
    // 認証状態によって表示するページをコントロール
    const hasAuthenticated = useGuestRouting()
    // 上記の処理でページのリダイレクトを入れても一瞬マウントされるので、それまで何も表示しないよう対応
    return hasAuthenticated ? <></> : <Route {...props} />
}

export default React.memo(GuestRoute)
