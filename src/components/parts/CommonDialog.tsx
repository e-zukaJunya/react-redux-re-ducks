import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import React from 'react'

interface Props {
    // 開閉状態
    open: boolean
    // タイトル
    title: string
    // 本文
    mainText: string
    // 処理を続行するボタン表示文言
    continueLabel?: string
    // キャンセル(ただ閉じる)ボタン表示文言
    cancelLabel: string
    // Yesの時のアクション
    onClickContinue?: () => void
    // Noのときのアクション
    onClose: () => void
    // 通知ダイアログモード
    notif?: boolean
}

export const CommonDialog: React.FC<Props> = (props) => {
    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{props.mainText}</DialogContentText>
            </DialogContent>
            <DialogActions>
                {!props.notif && (
                    <Button onClick={props.onClickContinue} color="primary">
                        {props.continueLabel}
                    </Button>
                )}

                <Button onClick={props.onClose} color="secondary" autoFocus>
                    {props.cancelLabel}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default React.memo(CommonDialog)
