import { Button, FormHelperText, TextField } from '@material-ui/core'
import NormalTextField from 'components/parts/NormalTextField'

import { useBooleanState, useStringState } from 'hooks/common/commonHooks'
import { useValidation } from 'hooks/common/validationHooks'
import { useOnKeyPressValidInput } from 'hooks/forms/formsHooks'
import React from 'react'

const TextBoxEx = () => {
    // テキストボックス活性状態管理
    const [disabled, disabledTextSetter] = useBooleanState(false)
    // テキストボックスの入力内容管理
    const [inputVal, textSetter] = useStringState('初期値')

    // 入力チェックサンプル
    const [inputVal2, textSetter2] = useStringState()
    const [showErr, showErrSetter] = useBooleanState(false)
    const validator = useValidation()
    // コールバックが10個以上とか多くなりすぎると微妙かもしれんが、コンポーネントの見通しが悪くなるより保守性はマシ
    // というかそれは1つのhookがでかすぎる疑惑なので処理を分割したほうが見通しよくテスタブルかも
    const handleKeyPress = useOnKeyPressValidInput(inputVal2, validator, showErrSetter.toggle)

    return (
        <div>
            <div>
                <TextField
                    label="input"
                    value={inputVal}
                    onChange={textSetter.update}
                    placeholder={'入力してね'}
                    disabled={disabled}
                />
                <Button onClick={disabledTextSetter.toggle}>不活性化</Button>
                <Button onClick={textSetter.reset}>リセット</Button>
            </div>
            <div>
                <TextField
                    label="入力チェック"
                    value={inputVal2}
                    onChange={textSetter2.update}
                    onKeyPress={handleKeyPress}
                />
                <FormHelperText>{'半角英数記号だけ'}</FormHelperText>
                {showErr && <p>入力チェックエラー</p>}
            </div>
            <div>
                <NormalTextField label={'共通化したやつを使ってるよ'} />
            </div>
        </div>
    )
}

export default React.memo(TextBoxEx)
