import React from 'react'
import styles from 'styles/login/login.module.scss'
import {loginLabels} from 'constants/labels'
import ForgotPasswordGuide from 'components/parts/ForgotPasswordGuide'
import LoginForms from 'components/parts/LoginForms'

// ログイン画面
const Login: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>{loginLabels.TITLE}</h1>
            {/*フォーム部分*/}
            <LoginForms/>
            {/*パスワードリセット案内*/}
            <ForgotPasswordGuide/>
        </div>
    )
}

export default React.memo(Login)
