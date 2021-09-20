import {RootState} from 'store/configureStore'

export const noticeDialogSelector = (state: RootState) => state.pages.noticeDialog
export const progressSelector = (state: RootState) => state.pages.displayProgress
