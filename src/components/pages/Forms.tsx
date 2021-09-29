import { Box, Tab, Tabs } from '@material-ui/core'
import PrivateRoute from 'components/parts/PrivateRoute'
import { pagePath } from 'constants/paths'
import { useNavigator } from 'hooks/common/routingHooks'
import { useTab } from 'hooks/forms/formsHooks'
import React from 'react'
import { Switch } from 'react-router-dom'
import CheckBoxEx from './forms/CheckBoxEx'
import IndeterminateCheckBoxEx from './forms/IndeterminateCheckBoxEx'
import RadioEx from './forms/RadioEx'
import TextBoxEx from './forms/TextBoxEx'

const tabPages = [
    pagePath.FORMS_CHECKBOX,
    pagePath.FORMS_RADIO,
    pagePath.FORMS_TEXT,
    pagePath.FORMS_INDETERMINATE_CHECKBOX,
]

const Forms = () => {
    // タブ状態管理
    const [value, setValue] = useTab(0)

    // タブ生成
    const navigator = useNavigator()
    const tabs = tabPages.map((page) => <Tab key={page} label={page} onClick={() => navigator(page)} />)

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
                <PrivateRoute exact path={pagePath.FORMS_CHECKBOX} key={pagePath.FORMS_CHECKBOX} component={CheckBoxEx} />
                <PrivateRoute exact path={pagePath.FORMS_RADIO} key={pagePath.FORMS_RADIO} component={RadioEx} />
                <PrivateRoute exact path={pagePath.FORMS_TEXT} key={pagePath.FORMS_TEXT} component={TextBoxEx} />
                <PrivateRoute
                    exact
                    path={pagePath.FORMS_INDETERMINATE_CHECKBOX}
                    key={pagePath.FORMS_INDETERMINATE_CHECKBOX}
                    component={IndeterminateCheckBoxEx}
                />
            </Switch>
        </div>
    )
}

export default React.memo(Forms)
