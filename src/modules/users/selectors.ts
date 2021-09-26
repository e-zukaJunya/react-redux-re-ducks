import { createSelector } from 'reselect'
import { SKIP_LOGIN } from 'setttings/settings'
import { RootState } from 'store/configureStore'

// 単純に1つのstateから値を取得する場合はこれだけ定義してコンポーネント側でこれを呼べばいい
const usersSelector = (state: RootState) => state.users.users

// 認証済みかどうかを取得する
// ログイン不要設定なら状態を問わずtrue
export const hasAuthenticatedSelector = (state: RootState) => SKIP_LOGIN || state.users.id !== ''

// 取得したstateをさらに加工する場合
export const getUsers = createSelector([usersSelector], (users) => users.map((item) => item.name))
