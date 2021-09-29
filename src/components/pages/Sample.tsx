import { pagePath } from 'constants/paths'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { messages, words } from 'resources/messages'

const Sample: React.FC = () => {
    // ローカルステートの例
    const [state, setState] = useState(true)

    return (
        <div>
            {/*メッセージ表示の例*/}
            <h1>Root</h1>
            <p>{messages.COMMON_ERROR()}</p>
            <p>{messages.HOGE(words.MANA)}</p>

            {/*ローカルステートの例*/}
            <div>{state.toString()}</div>
            {/*コールバックはなるべくuseCallbackで作成したものを割り当てるがよし*/}
            {/*これはローカルステートの動きを示すことを目的としたので面倒でそうしてない*/}
            <button type={'button'} onClick={() => setState(true)}>
                true
            </button>
            <button type={'button'} onClick={() => setState(false)}>
                false
            </button>

            {/*ページ遷移リンクの例*/}
            <div>
                <Link to={pagePath.FORMS}>{'Formのページへ'}</Link>
            </div>
        </div>
    )
}

export default React.memo(Sample)
