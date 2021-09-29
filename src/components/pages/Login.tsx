import React from 'react'
import styles from 'styles/login/login.module.scss'
import { loginLabels } from 'constants/labels'
import ForgotPasswordGuide from 'components/parts/ForgotPasswordGuide'
import LoginForms from 'components/parts/LoginForms'
import { FormControlLabel, Switch } from '@material-ui/core'
import { usePseudoLogin } from 'hooks/login/loginHooks'

// ログイン画面
const Login: React.FC = () => {
    // ログイン状態のトグルアクション
    const handler = usePseudoLogin()

    return (
        <div className={styles.container}>
            {/* タイトル */}
            <h1 className={styles.pageTitle}>{loginLabels.TITLE}</h1>

            {/*フォーム部分*/}
            <LoginForms />
            {/*パスワードリセット案内*/}
            <ForgotPasswordGuide />

            {/* ログイン状態のトグル */}
            <FormControlLabel control={<Switch onChange={handler} />} label="ログイン状態変更" />
        </div>
    )
}

export default React.memo(Login)
