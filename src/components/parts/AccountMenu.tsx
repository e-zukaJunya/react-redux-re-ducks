import { Menu, MenuItem } from '@material-ui/core'
import { accountMenuLabels } from 'constants/labels'
import { pagePath } from 'constants/paths'
import { useNavigator } from 'hooks/common/routingHooks'
import * as React from 'react'

interface Props {
    // メニュー出現位置の座標となるHTML要素
    anchorEl: null | HTMLElement
    // 閉じる時の挙動
    onClose: () => void
}

//アカウントメニュー
const AccountMenu: React.FC<Props> = (props) => {
    const navigator = useNavigator()
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
            <MenuItem onClick={() => navigator(pagePath.LOGIN)}>{accountMenuLabels.LOGOUT}</MenuItem>
            {/* パスワード変更 */}
            <MenuItem onClick={props.onClose}>{accountMenuLabels.CHANGE_PASSWORD}</MenuItem>
        </Menu>
    )
}

export default React.memo(AccountMenu)
