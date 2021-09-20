import CircularProgress from '@material-ui/core/CircularProgress'
import Modal from '@material-ui/core/Modal'
import * as React from 'react'
import styles from 'styles/common/progress.module.scss'
import {useSelector} from 'react-redux'
import {progressSelector} from 'modules/pages/selectors'

//プログレスコンポーネント
const Progress: React.FC = () =>
    <Modal className={styles.modal} open={useSelector(progressSelector)}>
        <CircularProgress className={styles.progress} size={80}/>
    </Modal>

export default React.memo(Progress)
