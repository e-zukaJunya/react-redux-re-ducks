import { rejectSample, testAsync, testGet, testRejectWithValue, testThunkApi } from 'modules/samples/operations'
import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'store/configureStore'

// 初期処理の例
// ページごとに初期処理ってあると思うが、この名前で専用フックファイルに定義する案が個人的に有力
export const useInit = () => {
    useEffect(() => {
        // よく非同期処理など副作用のある処理を実行すると説明があるが、非同期処理はredux-thunkなどのmiddlewareに任せるべき
        // 他のhook同様、operationsに定義した非同期Actionをdispatchするだけにしたほうが多分整然とする
        console.log('初期処理')

        // もしwindowオブジェクトなどにaddEventListenerなどしている場合は
        // return句でクリーンナップ用のremoveEventListnerを返すようにするとコンポーネントのアンマウント時に実行される
        return () => {
            console.log('unmount')
        }

        // 第二引数(dependencies)を空にすることで、useEffectの処理はコンポーネントマウント時の一度しか実行されない
    }, [])
}

export const useJustAsync = () => {
    const dispatch: AppDispatch = useDispatch()
    const onClick = useCallback(async () => {
        // thunk actionのdispatch
        const res = await dispatch(testAsync())

        // 結果を受けてコンポーネント側で処理をしたい場合
        if (testAsync.fulfilled.match(res)) {
            console.log(res.payload)
        }

        await dispatch(testThunkApi())
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

export const useRejectWithValue = () => {
    const dispatch: AppDispatch = useDispatch()
    return useCallback(() => dispatch(testRejectWithValue(5)), [])
}
