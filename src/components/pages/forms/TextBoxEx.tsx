import { Button, TextField } from '@material-ui/core'
import { useBooleanState, useStringState } from 'hooks/common/commonHooks'
import { useValidation } from 'hooks/common/validationHooks'
import { useOnKeyPressValidInput } from 'hooks/forms/formsHooks'
import React from 'react'

const TextBoxEx = () => {
    // 真偽値のtoggleサンプル
    const [active, setter] = useBooleanState(false)

    // inputを扱うときのサンプル
    const [inputVal, textSetter] = useStringState('初期値')

    // 入力チェックサンプル
    const [inputVal2, textSetter2] = useStringState()
    const [showErr, showErrSetter] = useBooleanState(false)
    const validator = useValidation()
    // コールバックが10個以上とか多くなりすぎると微妙かもしれんが、コンポーネントの見通しが悪くなるより保守性はマシ
    // というかそれは1つのhookがでかすぎる疑惑なので処理を分割したほうが見通しよくテスタブルかも
    const handleKeyPress = useOnKeyPressValidInput(inputVal2, validator, showErrSetter.on, showErrSetter.off)

    return (
        <div>
            <h1>フォーム要素の例</h1>

            <div>
                <TextField
                    disabled={!active}
                    label="input"
                    value={inputVal}
                    placeholder={'入力してね'}
                    onChange={textSetter.update}
                />
                <Button onClick={textSetter.reset}>リセット</Button>
                <Button onClick={setter.toggle}>不活性化</Button>
            </div>
            <div>
                <TextField
                    label="入力チェック"
                    value={inputVal2}
                    onChange={textSetter2.update}
                    onKeyPress={handleKeyPress}
                />
                {showErr && <p>入力チェックエラー</p>}
            </div>
        </div>
    )
}

export default React.memo(TextBoxEx)
