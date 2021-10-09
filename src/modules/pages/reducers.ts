import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as PayloadTypes from 'modules/pages/types'
import { PageState } from 'modules/pages/types'

const initialState: PageState = {
    // loaderの表示
    dispLoader: false,
    // 全体共通ダイアログ用(どの画面でも起きうるエラーの通知とか)
    dialog: {
        open: false,
        title: '',
        mainText: '',
    },
    snackbar: {
        open: false,
        message: '',
    },
}

// ページ全般に関するデータ
const pageSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        //共通通知ダイアログを開く
        setGlobalDialog: (state, action: PayloadAction<PayloadTypes.Dialog>) => {
            state.dialog = action.payload
        },
        //共通通知ダイアログを閉じる
        closeGlobalDialog: (state) => {
            state.dialog.open = false
            state.dialog.title = ''
            state.dialog.mainText = ''
        },
        //loaderを開閉する
        toggleLoader: (state, action?: PayloadAction<boolean>) => {
            // 開閉状態の指定がなければ前の状態と逆にする
            state.dispLoader = action ? action.payload : !state.dispLoader
        },
        //スナックバー表示
        setSnackbar: (state, action: PayloadAction<string>) => {
            state.snackbar.open = true
            state.snackbar.message = action.payload
        },
        //スナックバー非表示
        closeSnackbar: (state) => {
            state.snackbar.open = false
        },
    },
})

export default pageSlice.reducer
export const { setGlobalDialog, closeGlobalDialog, toggleLoader, setSnackbar, closeSnackbar } = pageSlice.actions
