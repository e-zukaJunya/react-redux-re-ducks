import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store/configureStore'

export const pageSelector = (state: RootState) => state.pages

export const dialogSelector = createSelector([pageSelector], (page) => page.dialog)
export const loaderSelector = createSelector([pageSelector], (page) => page.dispLoader)
export const snackbarSelector = createSelector([pageSelector], (page) => page.snackbar)
