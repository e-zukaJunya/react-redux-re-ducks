import { AppDispatch, RootState } from 'store/configureStore'

// API共通エラー型
export interface ApiError {
    message: string
}

// redux-toolkitのcreateAsyncThunkで使用するthunkAPI用の型
// TはrejectedWithValueを使用するときの返却型
export interface AsyncThunkConfig<T = unknown> {
    state: RootState
    dispatch: AppDispatch
    rejectValue: T
}
