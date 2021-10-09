export interface PageState {
    // ダイアログ関連の値
    dialog: Dialog
    // ローダーの表示
    dispLoader: boolean
}

export interface Dialog {
    // 開閉状態
    open: boolean
    // タイトル
    title: string
    // 本文
    mainText: string
}
