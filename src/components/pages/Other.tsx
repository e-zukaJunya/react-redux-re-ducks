import { Button } from '@material-ui/core'
import CommonDialog from 'components/parts/CommonDialog'
import { useBooleanState } from 'hooks/common/commonHooks'
import { useProgress, useUsers } from 'hooks/other/otherHooks'
import { getUsers } from 'modules/users/selectors'
import React from 'react'
import { useSelector } from 'react-redux'

const Other = () => {
    const [confDialog, openConfDialog, closeConfDialog] = useBooleanState(false)
    const [notifDialog, openNotifDialog, closeNotifDialog] =
        useBooleanState(false)

    const users = useSelector(getUsers)
    const usersParagraph = users.map((item: string, idx: number) => (
        <p key={idx}>{item}</p>
    ))
    const [setUsers, disposeUsers] = useUsers()

    //API呼び出しサンプル
    // const apiTest = async () => {
    //     const res = await apiGetRequest<ResponseSample, ErrorSample>('/maintenance/sample', {
    //         header: {test: 'test3'},
    //         queryPram: {test: 110}
    //     })
    //     console.log(res)
    //     if (axios.isAxiosError(res)) {
    //         //AxiosError
    //         if (res.response?.status == HttpStatusCode.BadRequest) {
    //             // badRequest
    //             console.log('BadRequest')
    //             const b = res.response?.data.message
    //         } else if (res.response?.status == HttpStatusCode.Unauthorized) {
    //             // 認証エラー
    //             console.log('認証エラー')
    //             const b = res.response?.data.message
    //         } else {
    //             // AxiosErrorその他
    //             console.log('その他：ネットワークエラーなど')
    //             const c = res.stack
    //         }
    //     } else {
    //         //成功(AxiosResponse)
    //         console.log(res.data.hizuke)
    //         console.log('成功')
    //     }
    // }

    //API呼び出しサンプルレスポンス用interface(サンプルなのでこちらに直書き）
    // interface ResponseSample {
    //     suuji: number,
    //     moji: string,
    //     hizuke: DateTime,
    //     shingi: boolean,
    //     suujiList: number[]
    // }

    //エラー用サンプルレスポンス
    // interface ErrorSample {
    //     message: string
    // }

    return (
        <div>
            <Button onClick={useProgress()}>ローディング</Button>

            <div>
                {usersParagraph}
                <div>
                    <Button onClick={setUsers}>{'ユーザーのセット'}</Button>
                </div>
                <div>
                    <Button onClick={disposeUsers}>
                        {'onClickDisposeUser'}
                    </Button>
                </div>
            </div>

            <div>
                <Button onClick={openConfDialog}>{'確認ダイアログ'}</Button>
                <Button onClick={openNotifDialog}>{'通知ダイアログ'}</Button>
            </div>

            <CommonDialog
                open={confDialog}
                confirm
                mainMessage={'確認ダイアログ'}
                doAgree={closeConfDialog}
                doDisagree={closeConfDialog}
            />
            <CommonDialog
                open={notifDialog}
                mainMessage={'通知ダイアログ'}
                doDisagree={closeNotifDialog}
            />

            {/*<Button onClick={() => onClickDispatch('A1')}>{'非同期処理'}</Button>*/}

            {/*<Button onClick={apiTest}>*/}
            {/*    {'API呼び出し'}*/}
            {/*</Button>*/}
        </div>
    )
}

export default React.memo(Other)
