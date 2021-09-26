import { useMemo } from "react"
import { useLocation } from "react-router-dom"

/**
 * pathnameの取得
 */
 export const usePathName = (): string => {
    const location = useLocation()
    return useMemo(() => location.pathname, [location.pathname])
}

/**
 * パスを分解して取得
 */
export const usePathNameList = (): string[] => {
    const pathname = usePathName()
    return useMemo(() => pathname.split('/').filter((x) => x !== ''), [pathname])
}
