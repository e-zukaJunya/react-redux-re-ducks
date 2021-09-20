import {Dialog, DialogActions, DialogContent, DialogContentText} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import * as React from 'react'
import styles from 'styles/common/dialog.module.scss'
import commonStyles from 'styles/common/baseDesign.module.scss'
import {dialogButton} from 'constants/labels'

interface Props {
    open: boolean,
    // 確認ダイアログかどうか
    confirm?: boolean,
    mainMessage: string,
    agreeButtonMessage?: string,
    disagreeButtonMessage?: string,
    closeButtonMessage?: string,
    doAgree?: () => void,
    doDisagree: () => void,
}

// 共通確認ポップアップ
const CommonDialog: React.FC<Props> = (props) => {
    const {
        // デフォは通知ダイアログ
        confirm = false,
        agreeButtonMessage = dialogButton.OK,
        disagreeButtonMessage = dialogButton.BACK,
        closeButtonMessage = dialogButton.CLOSE
    } = props

    //画面表示
    return (
        <Dialog
            open={props.open}
            onClose={props.doDisagree}
        >
            <DialogContent>
                <div className={commonStyles.displayLinebreak}>
                    <DialogContentText className={styles.infoDescription}>
                        {props.mainMessage}
                    </DialogContentText>
                </div>
            </DialogContent>
            <DialogActions className={styles.actions}>
                <Button className={styles.agreeButton} onClick={props.doDisagree}>
                    {confirm ? agreeButtonMessage : closeButtonMessage}
                </Button>
                <div
                    style={{display: confirm ? '' : 'none'}}
                    className={styles.disAgreeButtonArea}>
                    <Button
                        className={styles.disAgreeButton}
                        onClick={props.doDisagree}>
                        {disagreeButtonMessage}
                    </Button>
                </div>
            </DialogActions>
        </Dialog>
    )
}

export default React.memo(CommonDialog)
