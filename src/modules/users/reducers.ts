import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UsersState } from './types'

const initialState: UsersState = {
    // ユーザーID
    id: '',
    // 表示名称
    displayName: '',
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // 疑似的に認証状態を変更する
        setPseudoAuth: (state, action: PayloadAction<boolean>) => {
            if (action.payload) {
                // 認証状態にする
                state.id = 'id_001'
                state.displayName = '私の名前'
            } else {
                // 認証状態を消す
                state.id = ''
                state.displayName = ''
            }
        },
    },
})

export default usersSlice.reducer
export const { setPseudoAuth } = usersSlice.actions
