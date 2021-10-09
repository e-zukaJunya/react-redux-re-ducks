import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store/configureStore'

export const userSelector = (state: RootState) => state.users

// 認証済みかどうかを取得する
export const hasAuthenticatedSelector = createSelector([userSelector], (user) => user.displayName !== '')
