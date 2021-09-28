import React, { useCallback, useState } from 'react'
import { useToggle } from 'react-use'

/**
 * booleanの値をlocal stateとして扱うとき用
 * @param init 初期値
 * @returns 状態と管理メソッド
 */
export const useBooleanState = (init: boolean) => {
    const [state, toggle] = useToggle(init)

    const on = useCallback(() => {
        toggle(true)
    }, [])

    const off = useCallback(() => {
        toggle(false)
    }, [])

    return [state, { on, off, toggle }] as const
}

/**
 * inputのtextやtextareaの値を扱うとき用
 * @param init 初期値
 * @returns 状態と管理メソッド
 */
export const useStringState = (
    init = ''
): [
    string,
    {
        update: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
        reset: () => void
    }
] => {
    const [state, setState] = useState<string>(init)

    const update = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setState(e.target.value)
    }, [])

    const reset = useCallback(() => {
        setState('')
    }, [])

    return [state, { update, reset }]
}

/**
 * クリックした要素のアンカーをコントロールする
 * @returns 状態と管理メソッド
 */
export const useAnchor = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    // アンカーのセット
    const set = useCallback((e: React.MouseEvent<HTMLElement, MouseEvent>) => setAnchorEl(e.currentTarget), [])
    // アンカーのリリース
    const release = useCallback(() => setAnchorEl(null), [])
    return [anchorEl, { set, release }] as const
}
