// C#でいうEnumっぽいものの定義
// Javascriptにおけるenumは扱いづらいので使わない

// 入力チェック処理用の分類定義
export const CharType = {
    // すべてOK
    All: 0,
    // 半角英数記号
    HarfAlphaNumeric: 1,
    // 半角英語
    HarfAlpha: 2,
    // 半角数字
    HarfNumeric: 3,
    // 全角文字
    Full: 4,
} as const
export type CharType = typeof CharType[keyof typeof CharType]
