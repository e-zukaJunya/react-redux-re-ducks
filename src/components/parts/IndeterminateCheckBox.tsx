import { Box, Checkbox, FormControlLabel } from '@material-ui/core'
import * as React from 'react'

interface Props {
    // 親のラベル
    parentLabel: string
    // 選択肢
    values: string[]
}
// エクセルのフィルター的な選択ができるチェックボックス
const IndeterminateCheckbox: React.FC<Props> = (props) => {
    const [checked, setChecked] = React.useState(props.values.map(() => false))

    // 親のチェックボックス更新処理
    const handleParent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(checked.map(() => event.target.checked))
    }

    // 子のチェックボックス更新処理
    const handleChild = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = props.values.indexOf(event.target.name)
        setChecked(checked.map((checked, i) => (i === index ? !checked : checked)))
    }

    const childrenBoxes = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            {props.values.map((value, i) => (
                <FormControlLabel
                    style={{ width: '100px' }}
                    key={i}
                    label={value}
                    control={<Checkbox name={value} checked={checked[i]} onChange={handleChild} />}
                />
            ))}
        </Box>
    )

    // 親の選択状態コントロール
    const on = React.useMemo(() => checked.reduce((prev, curr) => prev && curr), [checked])
    const indeterminate = React.useMemo(() => checked.reduce((prev, curr) => prev || curr), [checked])

    return (
        <div>
            <FormControlLabel
                label={props.parentLabel}
                control={<Checkbox checked={on} indeterminate={indeterminate} onChange={handleParent} />}
            />
            {childrenBoxes}
        </div>
    )
}

export default React.memo(IndeterminateCheckbox)
