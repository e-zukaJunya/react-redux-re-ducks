import CircularProgress from '@material-ui/core/CircularProgress'
import Modal from '@material-ui/core/Modal'
import * as React from 'react'
import styles from 'styles/common/loader.module.scss'
import { useSelector } from 'react-redux'
import { progressSelector } from 'modules/pages/selectors'

//処理中表示するLoader
const Loader: React.FC = () => (
    <Modal className={styles.modal} open={useSelector(progressSelector)}>
        <CircularProgress className={styles.loader} size={80} />
    </Modal>
)

export default React.memo(Loader)
