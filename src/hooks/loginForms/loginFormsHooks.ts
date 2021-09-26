import { useStringState } from 'hooks/common/commonHooks'

export const useInitial = () => {
    const [loginId, loginIdSetter] = useStringState('')
    const [pwd, pwdSetter] = useStringState('')
}
