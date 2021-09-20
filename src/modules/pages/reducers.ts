import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import * as PayloadTypes from 'modules/pages/types'
import {InitialState} from 'modules/pages/types'

const initialState: InitialState = {
    // プログレスリングの表示
    displayProgress: false,
    // API呼び出しなどの結果、表示する通知ダイアログ用
    noticeDialog: {open: false, notice: true, mainMessage: '', closeButtonMessage: ''},
}

// ページ全般に関するデータ
const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        //共通通知ダイアログを開く
        setNoticeDialog: (state, action: PayloadAction<PayloadTypes.NoticeDialog>) => {
            state.noticeDialog = action.payload
        },
        //共通通知ダイアログを閉じる
        closeNoticeDialog: (state) => {
            state.noticeDialog.open = false
        },
        //プログレスコンポーネントを開閉する
        toggleProgress: (state, action: PayloadAction<boolean>) => {
            state.displayProgress = action.payload
        },
    }
})

export default pageSlice.reducer
export const {
    setNoticeDialog,
    closeNoticeDialog,
    toggleProgress,
} = pageSlice.actions
