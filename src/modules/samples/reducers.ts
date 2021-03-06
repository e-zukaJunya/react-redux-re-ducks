import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { rejectSample, testAsync, testRejectWithValue } from './operations'
import { Persons, SampleState } from './types'
// ↑ modules内のimportは相対でも良いかな。これらの階層が変わることは絶対にないから。
// importの絶対パスに完全にこだわる必要は多分ない

// Store本体

// Tips: Storeの作成単位はAPIエンドポイントのリソースと同様の単位がよさそう
// 加えて、Webアプリとして必要な情報の単位を追加（このpagesやusersのような）
// ほかには検索条件がたくさんあるものなどは、コンポーネント分割を頑張るとpropsバケツリレーコストが高くて辛くなるのでredux使うとか
// local stateではなくglobal stateを使いたいと感じた時が使い時

// 初期値
const initialState: SampleState = {
    // 人リスト
    personList: [
        { id: 0, name: 'alpha' },
        { id: 1, name: 'bravo' },
    ],
}

const samplesSlice = createSlice({
    // なんでもいいが、Storeと同じ名前でいい
    name: 'samples',
    // 初期値
    initialState,
    // 同期Action(普通にStoreを更新するだけの処理を書いたり)
    reducers: {
        setPersons: (state, action: PayloadAction<Persons[]>) => {
            // 返却をしなくても、この引数のstateを破壊的に変更しているように見えるが、
            // reduxjs-toolkitが新しいstateを生み出す形で設定している（内部で自動的にimmutableにされている）
            state.personList = action.payload
            // だからここでは配列に対してpop, pushなどをしても問題ない
        },
        disposePersons: (state) => {
            state.personList = []
        },
    },
    // 外部で作成したAction（主に非同期Action）
    extraReducers: (builder) => {
        builder
            // 中身何もしてないのにこれらを全部用意する必要はない。必要なものだけでいい。
            .addCase(testAsync.pending, (state, action) => {
                //非同期処理中のロジック
                console.log('途中')
                console.log(state)
                console.log(action.payload)
            })
            .addCase(testAsync.fulfilled, (state, action) => {
                //非同期処理成功時のロジック
                console.log('成功')
                console.log(state)
                console.log(action.payload)
            })
            .addCase(testAsync.rejected, (state, action) => {
                //非同期処理失敗時のロジック
                console.log('失敗')
                console.log(state)
                console.log(action.payload)
            })
            .addCase(rejectSample.rejected, (_, action) => {
                console.log('rejectSample 失敗')
                console.log(action.payload)
            })
            .addCase(testRejectWithValue.rejected, (_, action) => {
                console.log('testRejectWithValue 失敗')
                // rejectWithValueでここに来たわけではない時もある
                if (action.payload) {
                    console.log(action.payload)
                } else {
                    console.log(action.error.message)
                }
            })
    },
})

export default samplesSlice.reducer
export const { setPersons, disposePersons } = samplesSlice.actions
