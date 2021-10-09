import { Button } from '@material-ui/core'
import CommonDialog from 'components/parts/CommonDialog'
import { useBooleanState } from 'hooks/common/commonHooks'
import { useGlobalDialog, useLoader, usePersons } from 'hooks/other/otherHooks'
import React from 'react'

const Other = () => {
    const [confDialog, confDialogSetter] = useBooleanState(false)
    const [notifDialog, notifDialogSetter] = useBooleanState(false)
    const globalDialogHandler = useGlobalDialog()

    const [personNames, personSetter] = usePersons()
    // DOM作る処理はコンポーネント内かな…
    const nameParagraphs = personNames.map((item: string, idx: number) => <p key={idx}>{item}</p>)

    return (
        <div>
            <Button onClick={useLoader()}>ローディング</Button>

            <div>
                {nameParagraphs}
                <div>
                    <Button onClick={personSetter.set}>{'personのセット'}</Button>
                </div>
                <div>
                    <Button onClick={personSetter.dispose}>{'person破棄'}</Button>
                </div>
            </div>

            <div>
                <Button onClick={confDialogSetter.on}>{'確認ダイアログ'}</Button>
                <Button onClick={notifDialogSetter.on}>{'通知ダイアログ'}</Button>
                <Button onClick={globalDialogHandler.open}>{'全体共通通知ダイアログ'}</Button>
            </div>

            {/* ダイアログ */}
            <CommonDialog
                open={confDialog}
                title={'確認ダイアログ'}
                mainText={'本文です'}
                continueLabel={'はい'}
                cancelLabel={'閉じる'}
                onClickContinue={confDialogSetter.off}
                onClose={confDialogSetter.off}
            />
            <CommonDialog
                open={notifDialog}
                title={'通知ダイアログ'}
                mainText={'本文です'}
                cancelLabel={'閉じる'}
                onClose={notifDialogSetter.off}
                notif
            />
        </div>
    )
}

export default React.memo(Other)
