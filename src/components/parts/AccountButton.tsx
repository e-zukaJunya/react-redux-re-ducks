import * as React from 'react'
import { useCallback } from 'react'
import styles from 'styles/header/accountButton.module.scss'
import { IconButton } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import AccountMenu from 'components/parts/AccountMenu'

//ヘッダーのタブ全体
const AccountButton: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const handleClick = useCallback((event) => setAnchorEl(event.currentTarget), [])
    return (
        <div>
            <IconButton className={styles.iconButton} onClick={handleClick}>
                <AccountCircle />
            </IconButton>
            <AccountMenu anchorEl={anchorEl} doClose={() => setAnchorEl(null)} />
        </div>
    )
}

export default React.memo(AccountButton)
