import { Box, Tab, Tabs } from '@material-ui/core'
import PrivateRoute from 'components/parts/PrivateRoute'
import { tableTabs } from 'constants/labels'
import { pagePath } from 'constants/paths'
import { useNavigator } from 'hooks/common/routingHooks'
import { useTab } from 'hooks/forms/formsHooks'
import React from 'react'
import { Switch } from 'react-router-dom'
import DisplayTable from './tables/DisplayTable'
import EditableTable from './tables/EditableTable'

const tabPages = [
    { path: pagePath.TABLE_DISPLAY, label: tableTabs.DISPLAY },
    { path: pagePath.TABLE_EDITABLE, label: tableTabs.EDITABLE },
]

const Table = () => {
    // タブ状態管理
    const [value, setValue] = useTab(0)

    // タブ生成
    const navigator = useNavigator()
    const tabs = tabPages.map((page) => <Tab key={page.path} label={page.label} onClick={() => navigator(page.path)} />)

    return (
        <div>
            {/* タブ */}
            <Box sx={{ width: '100%' }}>
                <Tabs value={value} onChange={setValue}>
                    {tabs}
                </Tabs>
            </Box>

            {/* ルーティング設定 */}
            <Switch>
                <PrivateRoute
                    exact
                    path={pagePath.TABLE_DISPLAY}
                    key={pagePath.TABLE_DISPLAY}
                    component={DisplayTable}
                />
                <PrivateRoute
                    exact
                    path={pagePath.TABLE_EDITABLE}
                    key={pagePath.TABLE_EDITABLE}
                    component={EditableTable}
                />
            </Switch>
        </div>
    )
}

export default React.memo(Table)
