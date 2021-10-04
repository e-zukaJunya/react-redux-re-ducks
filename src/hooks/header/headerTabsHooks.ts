import { usePathNameList } from 'hooks/common/pathHooks'

/**
 * 現在のページがこのタブかどうか判断する
 * @param tabPath タブの持つパス
 * @returns 現在のページがこのタブかどうか
 */
export const useCurrentLocation = (tabPath: string) => {
    // 現在のパスのリスト
    const paths = usePathNameList()
    // タブのパスのルート
    const rootPath = tabPath.split('/')[1]
    // 現在地とタブがrootかどうか
    const isRoot = paths.length === 0 && rootPath === ''
    // 最終的な今いるタブかどうかの判断
    return isRoot || paths[0] === rootPath
}
