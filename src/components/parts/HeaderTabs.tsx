import { Button } from '@material-ui/core'
import { headerLabels } from 'constants/labels'
import { pagePath } from 'constants/paths'
import { useNavigator } from 'hooks/common/routingHooks'
import { useCurrentLocation } from 'hooks/header/headerTabsHooks'
import * as React from 'react'
import styles from 'styles/header/headerTabs.module.scss'

interface TabProps {
    // 表示する文字
    label: string
    // 遷移先のパス
    to: string
}

//個々のタブ
const Tab: React.FC<TabProps> = React.memo((props) => {
    const navigator = useNavigator()
    // 今いるタブかどうか
    const isCurrLocatoin = useCurrentLocation(props.to)

    return (
        <Button className={isCurrLocatoin ? styles.selectedTab : styles.tab} onClick={() => navigator(props.to)}>
            {props.label}
        </Button>
    )
})

const tabDataList = [
    { label: headerLabels.ROOT, path: pagePath.ROOT },
    { label: headerLabels.FORM, path: pagePath.FORMS_CHECKBOX },
    { label: headerLabels.LIST, path: pagePath.LIST },
    { label: headerLabels.TABLE, path: pagePath.TABLE_DISPLAY },
    { label: headerLabels.ASYNC, path: pagePath.ASYNC },
    { label: headerLabels.OTHER, path: pagePath.OTHER },
    { label: headerLabels.IGNORE_ATUH, path: pagePath.IGNORE_ATUH },
]
//ヘッダーのタブ全体
const HeaderTabs: React.FC = () => {
    const tabList = tabDataList.map((tab) => <Tab label={tab.label} to={tab.path} key={tab.path} />)
    return <div>{tabList}</div>
}

export default React.memo(HeaderTabs)
