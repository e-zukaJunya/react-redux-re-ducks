import React, {useCallback, useMemo, useState} from 'react'
import {useLocation,} from 'react-router-dom'
import {push} from 'connected-react-router'
import {useDispatch} from 'react-redux'
import {DateTime} from 'luxon'

/**
 * booleanの値をlocal stateとして扱うとき用
 * @param init 初期値
 */
export const useBooleanState = (
    init: boolean
): [boolean, () => void, () => void] => {
    const [state, setState] = useState<boolean>(init)

    const setTrue = useCallback(() => {
        setState(true)
    }, [])

    const setFalse = useCallback(() => {
        setState(false)
    }, [])

    return [state, setTrue, setFalse]
}

/**
 * booleanの値を同じアクションで切り替える
 * @param init 初期値
 */
export const useToggleBoolean = (
    init: boolean
): [boolean, () => void] => {
    const [active, setTrue, setFalse] = useBooleanState(init)

    const toggle = useCallback(() => {
        active ? setFalse() : setTrue()
    }, [active])

    return [active, toggle]
}

/**
 * stringの値をlocal stateとして扱うとき用
 * @param init 初期値
 */
export const useStringState = (
    init = '',
): [string, (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void, () => void] => {
    const [state, setState] = useState<string>(init)

    const update = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setState(e.target.value)
    }, [])

    const reset = useCallback(() => {
        setState('')
    }, [])

    return [state, update, reset]
}

/**
 * pathnameの取得
 */
export const usePathName = () => {
    const location = useLocation()
    return useMemo(() => location.pathname, [location.pathname])
}

/**
 * パスを分解して取得
 */
export const usePathNameList = () => {
    const pathname = usePathName()
    return useMemo(() => pathname.split('/').filter(x => x !== ''), [pathname])
}

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

/**
 * 現在日時取得
 * もしかするとこういうのは普通にただの共通関数にでもしたほうが良いのかもしれない
 */
export const useDtNow = () => DateTime.local().setLocale('ja')
