import { TextField, TextFieldProps } from '@material-ui/core'
import React from 'react'

// アプリ全体で使用するボタンやテキストボックスなどのパーツはこのように個別定義し、動的な部分をpropsとして受ける
// これはmaterial-uiを使用しているので、そのパーツの型をそのままpropsに使用して受け取ったものを展開している
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
