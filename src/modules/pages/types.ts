export interface InitialState {
    noticeDialog: NoticeDialog
    displayProgress: boolean
}

export interface NoticeDialog {
    open: boolean
    notice?: boolean
    mainMessage: string
    closeButtonMessage?: string
}
