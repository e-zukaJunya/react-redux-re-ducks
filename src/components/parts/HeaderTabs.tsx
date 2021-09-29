import * as React from 'react'
import styles from 'styles/header/headerTabs.module.scss'
import { useNavigator } from 'hooks/common/routingHooks'
import { useLocation } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { useTabList } from 'hooks/header/headerTabsHooks'
import { usePathNameList } from 'hooks/common/pathHooks'

interface TabProps {
    // 表示する文字
    label: string
    // 遷移先のパス
    to: string
}

//個々のタブ
const Tab: React.FC<TabProps> = React.memo((props) => {
    const navigator = useNavigator()
    const paths = usePathNameList()
    // タブのパスのルート
    const rootPath = props.to.split('/')[1]

    return (
        <Button className={paths[0] === rootPath ? styles.selectedTab : styles.tab} onClick={() => navigator(props.to)}>
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
