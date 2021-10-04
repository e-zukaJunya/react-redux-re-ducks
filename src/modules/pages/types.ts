export interface PageState {
    // ダイアログ関連の値
    noticeDialog: Dialog
    // ローダーの表示
    dispLoader: boolean
}

export interface Dialog {
    // 開閉
    open: boolean
    // 通知ダイアログかどうか
    notice?: boolean
    // メッセージ
    mainMessage: string
    // 閉じるボタンの文言
    closeButtonMessage?: string
}
