import { headerLabels } from 'constants/labels'
import { pagePath } from 'constants/paths'

/**
 * タブの生成に使うデータの作成
 */
export const useTabList = () => {
    return [
        { label: headerLabels.ROOT, path: pagePath.ROOT },
        { label: headerLabels.PAGE2, path: pagePath.FORMS },
        { label: headerLabels.PAGE3, path: pagePath.PAGE3 },
        { label: headerLabels.OTHER, path: pagePath.OTHER },
    ]
}
