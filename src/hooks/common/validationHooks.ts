import { CharType } from 'constants/enums'
import { useCallback } from 'react'

/**
 * 入力チェック
 */
export const useValidation = () => {
    return useCallback(
        (
            // 実際の文字列、チェックのタイプ、最大桁数、最小桁数、
            val: string,
            chartType: CharType,
            max: number,
            min = 0
        ): boolean => {
            // 桁数チェック
            if (min < val.length && val.length < max) {
                return false
            }
            // 文字種チェック
            switch (chartType) {
                case CharType.HarfAlphaNumeric:
                    // 半角英数記号のみ
                    if (!RegExp('^[a-zA-Z0-9!-/:-@¥[-`{-~]*$').test(val)) {
                        return false
                    }
                    break
                case CharType.HarfAlpha:
                    // 半角英語のみ
                    if (!RegExp('^[a-zA-Z]*$').test(val)) {
                        return false
                    }
                    break
                case CharType.HarfNumeric:
                    // 半角数字のみ
                    if (!RegExp('^[0-9]*$').test(val)) {
                        return false
                    }
                    break
                case CharType.Full:
                    // 全角のみ
                    if (!RegExp('^[^\x20-\x7e]*$').test(val)) {
                        return false
                    }
                    break
                default:
                    break
            }
            return true
        },
        []
    )
}
