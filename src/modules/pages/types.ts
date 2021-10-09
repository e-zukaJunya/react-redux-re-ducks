export interface PageState {
    // ダイアログ関連の値
    dialog: Dialog
    // ローダーの表示
    dispLoader: boolean
    // snackbar
    snackbar: Snackbar
}

export interface Dialog {
    // 開閉状態
    open: boolean
    // タイトル
    title: string
    // 本文
    mainText: string
}

export interface Snackbar {
    // 開閉状態
    open: boolean
    // 表示文言
    message: string
}
