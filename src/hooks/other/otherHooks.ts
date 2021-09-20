import { toggleProgress } from 'modules/pages/reducers'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { disposeUsers, setUsers } from 'modules/users/reducers'

/**
 * プログレスリングを試しに表示するサンプル
 */
export const useProgress = () => {
    const dispatch = useDispatch()
    return useCallback(async () => {
        dispatch(toggleProgress(true))
        await new Promise((r) => setTimeout(r, 1000))
        dispatch(toggleProgress(false))
    }, [])
}

/**
 * user storeの値を更新する処理のサンプル
 */
export const useUsers = (): [() => void, () => void] => {
    const dispatch = useDispatch()
    const set = useCallback(
        () =>
            dispatch(
                setUsers([
                    { id: 1, name: 'bravo' },
                    { id: 2, name: 'charlie' },
                ])
            ),
        []
    )
    const dispose = useCallback(() => dispatch(disposeUsers()), [])

    return [set, dispose]
}
