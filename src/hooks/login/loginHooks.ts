import { setPseudoAuth } from 'modules/users/reducers'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

// 疑似的な認証状態のコントロール
export const usePseudoLogin = () => {
    const dispatch = useDispatch()
    const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPseudoAuth(e.target.checked))
    }, [])
    return handler
}
