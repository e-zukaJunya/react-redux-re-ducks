import { Button } from '@material-ui/core'
import { useNavigator } from 'hooks/common/routingHooks'
import { useCurrentLocation, useTabList } from 'hooks/header/headerTabsHooks'
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

//ヘッダーのタブ全体
const HeaderTabs: React.FC = () => {
    const tabDataList = useTabList()
    const tabList = tabDataList.map((tab) => <Tab label={tab.label} to={tab.path} key={tab.path} />)
    return <div>{tabList}</div>
}

export default React.memo(HeaderTabs)
