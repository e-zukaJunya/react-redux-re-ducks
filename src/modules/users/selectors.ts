import { createSelector } from 'reselect'
import { RootState } from 'store/configureStore'

// 単純に1つのstateから値を取得する場合はこれだけ定義してコンポーネント側でこれを呼べばいい
const usersSelector = (state: RootState) => state.users.users

// 取得したstateをさらに加工する場合
export const getUsers = createSelector([usersSelector], (users) => users.map((item) => item.name))
