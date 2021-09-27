import { push, replace } from 'connected-react-router'
import { pagePath } from 'constants/paths'
import { hasAuthenticatedSelector } from 'modules/users/selectors'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { SKIP_LOGIN } from 'setttings/settings'

/**
 * ページ遷移用関数を返す
 * @param replaceRoute 履歴に残さない遷移をさせるか
 * @returns ページ遷移用関数
 */
export const useNavigator = (replaceRoute = false) => {
    const dispatch = useDispatch()
    const location = useLocation()
    return useCallback(
        // 遷移先のパス
        (to: string) => {
            // 現在と同じパスには遷移を起こさない
            if (to !== location.pathname) {
                dispatch(replaceRoute ? replace(to) : push(to))
            }
        },
        [location]
    )
}

// #region 各ページへのルーティング
export const useNavigateToTop = () => {
    const navigator = useNavigator()
    return useCallback(() => {
        navigator(pagePath.ROOT)
    }, [])
}

export const useNavigateToLogin = () => {
    const navigator = useNavigator()
    return useCallback(() => {
        navigator(pagePath.LOGIN)
    }, [])
}
// #endregion

/**
 * 認証済みページマウント時の処理
 * @returns 認証状態
 */
export const usePrivateRouting = () => {
    // 認証状態の取得
    // ログイン不要設定なら状態を問わずtrue
    const hasAuthenticated = SKIP_LOGIN ? true : useSelector(hasAuthenticatedSelector)

    const navigator = useNavigator(true)

    useEffect(() => {
        //未認証ならログインページへリダイレクト
        !hasAuthenticated && navigator(pagePath.LOGIN)
    }, [hasAuthenticated])

    return hasAuthenticated
}

/**
 * 未認証ページマウント時の処理
 * @returns 認証状態
 */
export const useGuestRouting = () => {
    // 認証状態の取得
    // ログイン不要設定なら状態を問わずfalse
    const hasAuthenticated = SKIP_LOGIN ? false : useSelector(hasAuthenticatedSelector)

    const navigator = useNavigator(true)

    useEffect(() => {
        // 認証済みならトップページへリダイレクト
        hasAuthenticated && navigator(pagePath.ROOT)
    }, [hasAuthenticated])
    
    return hasAuthenticated
}
