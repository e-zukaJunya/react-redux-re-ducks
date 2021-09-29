import { CharType } from 'constants/enums'
import React, { useCallback, useState } from 'react'

/**
 * タブの状態管理
 * @param init 初期値
 * @returns 状態と管理メソッド
 */
export const useTab = (init: number) => {
    const [value, setValue] = useState(init)

    // eslint-disable-next-line @typescript-eslint/ban-types
    const handleChange = useCallback((event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }, [])

    return [value, handleChange] as const
}

/**
 * フォームのエンター押したときのコールバックを返す
 * @param val 入力値
 * @param validator 入力チェックを行う関数
 * @param setTrue エラーメッセージを表示する関数
 * @param setFalse エラーメッセージを非表示にする関数
 */
export const useOnKeyPressValidInput = (
    val: string,
    validator: (val: string, chartType: CharType, max: number, min: number) => boolean,
    setTrue: () => void,
    setFalse: () => void
) => {
    // これごとタグのonKeyPressに渡すための作り
    return useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            // エンターで、チェックする値が空でなければcallbackを実行
            if (e.key === 'Enter' && val.trim()) {
                // 念のため
                e.preventDefault()
                const res = validator(val, CharType.HarfAlphaNumeric, 1, 5)
                if (res) {
                    // エラーメッセージ表示
                    setFalse()
                } else {
                    // エラーメッセージ非表示
                    setTrue()
                }
            }
        },
        [val, setTrue, setFalse]
    )
}
