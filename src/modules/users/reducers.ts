import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { testGet } from './operations'
import * as PayloadTypes from './types'
// ↑ modules内のimportは相対でも良いかな。これらの階層が変わることは絶対にないから。

const initialState = {
    id: '',
    displayName: '',
    users: [
        { id: 0, name: 'alpha' },
        { id: 1, name: 'bravo' },
    ],
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    // 同期Action(普通にStoreを更新するだけの処理を書いたり)
    reducers: {
        setUsers: (state, action: PayloadAction<PayloadTypes.SetUsers[]>) => {
            // 返却をしなくても、この引数のstateを変更していくだけで新しいstateが生み出されて設定される（内部で自動的にimmutableにされている）
            state.users = action.payload
        },
        disposeUsers: (state) => {
            state.users = []
        },
    },
    // 外部で作成したAction（主に非同期Action）
    extraReducers: (builder) => {
        builder
            // 中身何もしてないのにこれを全部用意する必要はない。必要なものだけでいい。
            .addCase(testGet.pending, (state, action) => {
                //非同期処理中のロジック
                console.log('途中')
            })
            .addCase(testGet.fulfilled, (state, action) => {
                console.log('成功')
                //非同期処理成功時のロジック
            })
            .addCase(testGet.rejected, (state, action) => {
                console.log('失敗')
                //非同期処理失敗時のロジック
            })
    },
})

export default usersSlice.reducer
export const { setUsers, disposeUsers } = usersSlice.actions
