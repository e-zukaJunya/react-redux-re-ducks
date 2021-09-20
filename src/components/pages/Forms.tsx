import React from 'react'
import {useBooleanState, useStringState, useToggleBoolean} from 'hooks/common/commonHooks'
import {Button, TextField} from '@material-ui/core'
import {useValidation} from 'hooks/common/validationHooks'
import {useOnKeyPressValidInput} from 'hooks/forms/formsHooks'

const Forms = () => {
    // 真偽値のtoggleサンプル
    const [active, toggle] = useToggleBoolean(true)

    // inputを扱うときのサンプル
    const [inputVal, update, reset] = useStringState('初期値')

    // 入力チェックサンプル
    const [inputVal2, update2] = useStringState()
    const [showErr, setTrue, setFalse] = useBooleanState(false)
    const validator = useValidation()
    // コールバックが10個以上とか多くなりすぎると微妙かもしれんが、コンポーネントの見通しが悪くなるより保守性はマシ
    // というかそれは1つのhookがでかすぎる疑惑なので処理を分割したほうが見通しよくテスタブルかも
    const handleKeyPress = useOnKeyPressValidInput(inputVal2, validator, setTrue, setFalse,)

    return (
        <div>
            <h1>フォーム要素の例</h1>

            <div>
                <TextField
                    disabled={!active}
                    label="input"
                    value={inputVal}
                    placeholder={'入力してね'}
                    onChange={update}
                />
                <Button onClick={reset}>リセット</Button>
                <Button onClick={toggle}>不活性化</Button>
            </div>
            <div>
                <TextField
                    label="入力チェック"
                    value={inputVal2}
                    onChange={update2}
                    onKeyPress={handleKeyPress}
                />
                {showErr && <p>入力チェックエラー</p>}
            </div>
        </div>
    )
}

export default React.memo(Forms)
