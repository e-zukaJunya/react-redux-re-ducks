import { createSelector } from 'reselect'
import { RootState } from 'store/configureStore'

// Storeの塊から必要なデータを取得・加工する処理
// Viewで扱いたい形式に加工するロジックを定義するのが重要

// 単純にstore stateの値を参照する場合はこれを使用して読み込めばいい
// 複数のStoreのツリーを参照して使用したいならそのstore分これを定義(storeは正規化されているほうがいいため、複数種のstoreの値を使用したい状況は多々あるはず)
export const sampleSelector = (state: RootState) => state.sample

// 取得したstateをさらに加工する場合
// もしくはより下のツリーを参照したい場合
export const personNamesSelector = createSelector([sampleSelector], (sample) => sample.personList.map((p) => p.name))
