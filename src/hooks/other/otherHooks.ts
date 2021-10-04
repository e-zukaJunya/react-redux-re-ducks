import { toggleLoader } from 'modules/pages/reducers'
import { disposePersons, setPersons } from 'modules/samples/reducers'
import { personNamesSelector } from 'modules/samples/selectors'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/**
 * loaderを試しに表示するサンプル
 */
export const useLoader = () => {
    const dispatch = useDispatch()
    return useCallback(async () => {
        dispatch(toggleLoader(true))
        await new Promise((r) => setTimeout(r, 1000))
        dispatch(toggleLoader(false))
    }, [])
}

/**
 * storeの値を参照・更新する処理のサンプル
 */
export const usePersons = () => {
    const personNames = useSelector(personNamesSelector)
    const dispatch = useDispatch()
    const set = useCallback(
        () =>
            dispatch(
                setPersons([
                    { id: 1, name: 'bravo' },
                    { id: 2, name: 'charlie' },
                ])
            ),
        []
    )
    const dispose = useCallback(() => dispatch(disposePersons()), [])

    return [personNames, { set, dispose }] as const
}
