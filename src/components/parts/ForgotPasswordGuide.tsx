import React from 'react'
import styles from 'styles/login/forgotPasswordGuide.module.scss'
import { loginLabels } from 'constants/labels'

// ログイン画面
const ForgotPasswordGuide: React.FC = () => {
    return (
        <p>
            {loginLabels.LINK_RESET_TITLE}
            {/*リンク風になっている部分*/}
            <span className={styles.passwordLink}>{loginLabels.LINK_RESET_HERE}</span>
        </p>
    )
}

export default React.memo(ForgotPasswordGuide)
