import * as React from 'react'
import {Menu, MenuItem} from '@material-ui/core'
import {accountMenuLabels} from 'constants/labels'
import {useNavigator} from 'hooks/common/commonHooks'
import {pagePath} from 'constants/paths'

interface Props {
    // メニュー出現位置の座標となるHTML要素
    anchorEl: null | HTMLElement,
    // 閉じる時の挙動
    doClose: () => void;
}

//アカウントメニュー
const AccountMenu: React.FC<Props> = (props) => {
    const navigator = useNavigator()
    return (
        <Menu
            open={Boolean(props.anchorEl)}
            onClose={props.doClose}
            anchorEl={props.anchorEl}
            // 出現と変形の位置調整
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <MenuItem onClick={() => navigator(pagePath.LOGIN)}>{accountMenuLabels.LOGOUT}</MenuItem>
            <MenuItem onClick={props.doClose}>{accountMenuLabels.CHANGE_PASSWORD}</MenuItem>
        </Menu>
    )
}

export default React.memo(AccountMenu)
