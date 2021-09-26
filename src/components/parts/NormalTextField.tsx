import { TextField, TextFieldProps } from '@material-ui/core'

export const NormalTextField: React.FC = (props: TextFieldProps) => (
    <TextField
        // 枠で囲まれたタイプ
        variant="outlined"
        // 横幅は親要素いっぱい
        fullWidth
        {...props}
    />
)
