import { IconButton } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import AccountMenu from 'components/parts/AccountMenu'
import { useAnchor } from 'hooks/common/commonHooks'
import * as React from 'react'
import styles from 'styles/header/accountButton.module.scss'

//ヘッダーのタブ全体
const AccountButton: React.FC = () => {
    // メニュー出現位置をコントロールするアンカー
    const [anchorEl, anchorSetter] = useAnchor()
    return (
        <div>
            <IconButton className={styles.iconButton} onClick={anchorSetter.set}>
                <AccountCircle />
            </IconButton>
            <AccountMenu anchorEl={anchorEl} onClose={anchorSetter.release} />
        </div>
    )
}

export default React.memo(AccountButton)
