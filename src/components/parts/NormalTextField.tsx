import { TextField, TextFieldProps } from '@material-ui/core'
import React from 'react'

const NormalTextField = (props: TextFieldProps) => (
    <TextField
        // 枠で囲まれたタイプ
        variant="outlined"
        // 横幅は親要素いっぱい
        fullWidth
        {...props}
    />
)

export default React.memo(NormalTextField)
