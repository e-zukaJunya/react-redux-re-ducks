import { rejectSample, testAsync, testGet } from 'modules/samples/operations'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'store/configureStore'

export const useJustAsync = () => {
    const dispatch: AppDispatch = useDispatch()
    const onClick = useCallback(async () => {
        // thunk actionのdispatch
        const res = await dispatch(testAsync())

        // 結果を受けてコンポーネント側で処理をしたい場合
        if (testAsync.fulfilled.match(res)) {
            console.log(res.payload)
        }
    }, [])

    return onClick
}

export const useGetSample = () => {
    const dispatch: AppDispatch = useDispatch()
    const onClick = useCallback(() => dispatch(testGet('test')), [])
    return onClick
}

export const useRejectSample = () => {
    const dispatch: AppDispatch = useDispatch()
    const onClick = useCallback(async () => {
        const res = await dispatch(rejectSample())
        if (testAsync.rejected.match(res)) {
            console.log(res.error)
            console.log(res.payload)
        }
    }, [])
    return onClick
}
