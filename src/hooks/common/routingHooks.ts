import { push } from 'connected-react-router'
import { pagePath } from 'constants/paths'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

/**
 * ページ遷移
 */
export const useNavigator = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    return useCallback(
        // 遷移先のパス
        (to: string) => {
            // 現在と同じパスには遷移を起こさない
            if (to !== location.pathname) {
                dispatch(push(to))
            }
        },
        [location]
    )
}

export const navigateToTop = useCallback(() => {
    const navigator = useNavigator()
    navigator(pagePath.ROOT)
}, [])
