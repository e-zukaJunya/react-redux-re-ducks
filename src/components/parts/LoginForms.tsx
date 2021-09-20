import React, {useState} from 'react'
import {Button, TextField} from '@material-ui/core'
import ExitToApp from '@material-ui/icons/ExitToApp'
import styles from 'styles/login/loginForms.module.scss'
import {loginLabels} from 'constants/labels'
import {useNavigator} from 'hooks/common/commonHooks'
import {pagePath} from 'constants/paths'


// ログイン画面
const LoginForms: React.FC = () => {
    const navigator = useNavigator()
    const [loginId, setLoginId] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <div className={styles.inputArea}>
                <TextField
                    // 枠で囲まれたタイプ
                    variant="outlined"
                    // 横幅は親要素いっぱい
                    fullWidth
                    // 上に移動するラベルがつく
                    label={loginLabels.MAIL_ADDRESS}
                    // 普通のHTMLのtypeと一緒
                    type="email"
                    // ユーザーの入力補完に役立つぽい
                    autoComplete="email"
                    InputProps={{
                        // 上限を効かせてくれる
                        // 中のテキストフィールドに対してクラス名をつけたりもできる
                        inputProps: {maxLength: 255},
                        classes: {
                            // borderのスタイル効かせたいならこれ
                            notchedOutline: styles.inputTextFieldOutline
                        }
                    }}
                    onChange={event => setLoginId(event.target.value)}
                />
            </div>
            <div className={styles.inputArea}>
                <TextField
                    // 枠で囲まれたタイプ
                    variant="outlined"
                    // 横幅は親要素いっぱい
                    fullWidth
                    // 上に移動するラベルがつく
                    label={loginLabels.PASSWORD}
                    // 普通のHTMLのtypeと一緒
                    type="password"
                    InputProps={{
                        // 上限を効かせてくれる
                        // 中のテキストフィールドに対してクラス名をつけたりもできる
                        inputProps: {maxLength: 16},
                        classes: {
                            // borderのスタイル効かせたいならこれ
                            notchedOutline: styles.inputTextFieldOutline
                        }
                    }}
                    onChange={event => setPassword(event.target.value)}
                />
            </div>
            <div className={styles.inputArea}>
                <Button
                    className={styles.loginButton}
                    // 塗りつぶされたボタン
                    variant="contained"
                    // ボタン中のアイコン
                    startIcon={<ExitToApp/>}
                    // 活性状態コントロール
                    disabled={!(loginId.trim() && password.trim())}
                    // クリックでとりあえずトップへ
                    onClick={() => navigator(pagePath.ROOT)}
                >
                    {loginLabels.LOGIN_BUTTON}
                </Button>
            </div>
        </div>
    )
}

export default React.memo(LoginForms)
