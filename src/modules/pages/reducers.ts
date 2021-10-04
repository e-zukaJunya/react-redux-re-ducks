import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as PayloadTypes from 'modules/pages/types'
import { PageState } from 'modules/pages/types'

const initialState: PageState = {
    // loaderの表示
    dispLoader: false,
    // API呼び出しなどの結果、表示する通知ダイアログ用
    noticeDialog: {
        open: false,
        notice: true,
        mainMessage: '',
        closeButtonMessage: '',
    },
}

// ページ全般に関するデータ
const pageSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        //共通通知ダイアログを開く
        setNoticeDialog: (state, action: PayloadAction<PayloadTypes.Dialog>) => {
            state.noticeDialog = action.payload
        },
        //共通通知ダイアログを閉じる
        closeNoticeDialog: (state) => {
            state.noticeDialog.open = false
        },
        //loaderを開閉する
        toggleLoader: (state, action?: PayloadAction<boolean>) => {
            // 開閉状態の指定がなければ前の状態と逆にする
            state.dispLoader = action ? action.payload : !state.dispLoader
        },
    },
})

export default pageSlice.reducer
export const { setNoticeDialog, closeNoticeDialog, toggleLoader } = pageSlice.actions
