import { closeGlobalDialog, setGlobalDialog, toggleLoader } from 'modules/pages/reducers'
import { Dialog } from 'modules/pages/types'
import { disposePersons, setPersons } from 'modules/samples/reducers'
import { personNamesSelector } from 'modules/samples/selectors'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'store/configureStore'

/**
 * loaderを試しに表示するサンプル
 */
export const useLoader = () => {
    const dispatch: AppDispatch = useDispatch()
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
    const dispatch: AppDispatch = useDispatch()
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

/**
 * 全体共通ダイアログを試しに使うサンプル
 */
export const useGlobalDialog = () => {
    const dispatch: AppDispatch = useDispatch()
    const open = useCallback(() => {
        const dialogInfo: Dialog = {
            open: true,
            title: '共通ダイアログ',
            mainText: '本文',
        }
        dispatch(setGlobalDialog(dialogInfo))
    }, [])
    const close = useCallback(() => dispatch(closeGlobalDialog()), [])
    return { open, close }
}
