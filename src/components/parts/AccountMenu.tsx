import { Menu, MenuItem } from '@material-ui/core'
import { accountMenuLabels } from 'constants/labels'
import { setPseudoAuth } from 'modules/users/reducers'
import * as React from 'react'
import { useDispatch } from 'react-redux'

interface Props {
    // メニュー出現位置の座標となるHTML要素
    anchorEl: null | HTMLElement
    // 閉じる時の挙動
    onClose: () => void
}

//アカウントメニュー
const AccountMenu: React.FC<Props> = (props) => {
    const dispatch = useDispatch()
    return (
        <Menu
            // 開閉状態
            open={Boolean(props.anchorEl)}
            // メニュー外クリック時の挙動
            onClose={props.onClose}
            // 出現位置のアンカー
            anchorEl={props.anchorEl}
            // #region 出現と変形の位置調整
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            // #endregion
        >
            {/* ログアウト */}
            <MenuItem onClick={() => dispatch(setPseudoAuth(false))}>{accountMenuLabels.LOGOUT}</MenuItem>
            {/* パスワード変更 */}
            <MenuItem onClick={props.onClose}>{accountMenuLabels.CHANGE_PASSWORD}</MenuItem>
        </Menu>
    )
}

export default React.memo(AccountMenu)
