import * as React from 'react'
import styles from 'styles/footer/footer.module.scss'

//フッター
const Footer: React.FC = () => (
    <footer>
        <p className={styles.copyright}>Copyright (c) e-zuka All Rights Reserved</p>
    </footer>
)

export default React.memo(Footer)
