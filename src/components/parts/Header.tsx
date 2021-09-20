import {ButtonBase} from '@material-ui/core'
import * as React from 'react'
import styles from 'styles/header/header.module.scss'
import logo from 'resources/images/logo.png'
import {pagePath} from 'constants/paths'
import {headerLabels} from 'constants/labels'
import {useNavigator, usePathName} from 'hooks/common/commonHooks'
import HeaderTabs from 'components/parts/HeaderTabs'
import AccountButton from 'components/parts/AccountButton'

//アプリの共通ヘッダー
const Header: React.FC = () => {
    const path = usePathName()
    const navigator = useNavigator()
    return (
        <header className={styles.header}>
            {/*左詰め要素*/}
            <div className={styles.headerLeft}>
                {/*ただのボタンで内部にコンポーネント入れるとspanタグが出現するのでButtonBaseを使用*/}
                <ButtonBase className={styles.logoButton} onClick={() => navigator(pagePath.ROOT)}>
                    <img src={logo} alt="logo"/>
                </ButtonBase>

                <h1 className={styles.appTitle}>{headerLabels.APP_TITLE}</h1>

                {/*ログイン以外の時にタブを表示*/}
                {(path !== pagePath.LOGIN) ? <HeaderTabs/> : null}
            </div>

            {/*右詰め要素*/}
            <div className={styles.headerRight}>
                {/*ログイン以外の時にアカウントボタンを表示*/}
                {path !== pagePath.LOGIN ? <AccountButton/> : null}
            </div>
        </header>
    )
}

export default React.memo(Header)
