import CircularProgress from '@material-ui/core/CircularProgress'
import Modal from '@material-ui/core/Modal'
import { loaderSelector } from 'modules/pages/selectors'
import * as React from 'react'
import { useSelector } from 'react-redux'
import styles from 'styles/common/loader.module.scss'

//処理中表示するLoader
const Loader: React.FC = () => (
    <Modal className={styles.modal} open={useSelector(loaderSelector)}>
        <CircularProgress className={styles.loader} size={80} />
    </Modal>
)

export default React.memo(Loader)
