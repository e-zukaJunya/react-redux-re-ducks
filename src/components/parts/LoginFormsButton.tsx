import { Button } from '@material-ui/core'
import ExitToApp from '@material-ui/icons/ExitToApp'
import { loginLabels } from 'constants/labels'
import { pagePath } from 'constants/paths'
import { useNavigator } from 'hooks/common/routingHooks'
import React, { useCallback } from 'react'
import styles from 'styles/login/loginForms.module.scss'

interface Props {
    loginId: string
    password: string
}
// ログイン画面
const LoginFormsButton: React.FC<Props> = (props) => {
    const navigator = useNavigator()
    const navigateToTop = useCallback(() => {
        navigator(pagePath.ROOT)
    }, [])
    const disabled = !(props.loginId.trim() && props.password.trim())
    return (
        <div className={styles.inputArea}>
            <Button
                className={styles.loginButton}
                // 塗りつぶされたボタン
                variant="contained"
                // ボタン中のアイコン
                startIcon={<ExitToApp />}
                // 活性状態コントロール
                disabled={disabled}
                // クリックでとりあえずトップへ
                onClick={navigateToTop}
            >
                {loginLabels.LOGIN_BUTTON}
            </Button>
        </div>
    )
}

export default React.memo(LoginFormsButton)
