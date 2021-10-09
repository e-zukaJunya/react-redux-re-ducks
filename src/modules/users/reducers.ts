import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { hogeRes } from 'modules/samples/types'
import { UsersState } from './types'

const initialState: UsersState = {
    // ユーザーID
    id: 0,
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
                state.id = 1
                state.displayName = '私の名前'
            } else {
                // 認証状態を消す
                state.id = 0
                state.displayName = ''
            }
        },
        setUser: (state, action: PayloadAction<hogeRes>) => {
            state.id = action.payload.id
            state.displayName = action.payload.name
        },
    },
})

export default usersSlice.reducer
export const { setPseudoAuth, setUser } = usersSlice.actions
