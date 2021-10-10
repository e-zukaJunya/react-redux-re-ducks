import { IconButton, Snackbar } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { closeSnackbar } from 'modules/pages/reducers'
import { snackbarSelector } from 'modules/pages/selectors'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'store/configureStore'

//スナックバー
const CustomSnackbar: React.FC = () => {
    const snackbarState = useSelector(snackbarSelector)
    const dispatch: AppDispatch = useDispatch()
    const handleClose = React.useCallback((_?: React.SyntheticEvent, reason?: string) => {
        // スナックバー外押下でも勝手に消えない対応
        if (reason === 'clickaway') {
            return
        }
        dispatch(closeSnackbar())
    }, [])
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={snackbarState.open}
            message={snackbarState.message}
            autoHideDuration={5000}
            onClose={handleClose}
            action={
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            }
        />
    )
}

export default React.memo(CustomSnackbar)
