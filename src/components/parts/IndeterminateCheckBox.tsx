import { Box, Checkbox, FormControlLabel } from '@material-ui/core'
import * as React from 'react'

// 選択肢
const children = ['child1', 'child2', 'child3', 'child4']

// エクセルのフィルター的な選択ができるチェックボックス
const IndeterminateCheckbox = () => {
    const [checked, setChecked] = React.useState(children.map(() => false))

    // 親のチェックボックス更新処理
    const handleParent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(checked.map(() => event.target.checked))
    }

    // 子のチェックボックス更新処理
    const handleChild = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = children.indexOf(event.target.name)
        setChecked(checked.map((checked, i) => (i === index ? !checked : checked)))
    }

    const childrenBoxes = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            {children.map((value, i) => (
                <FormControlLabel
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
                label="Parent"
                control={<Checkbox checked={on} indeterminate={indeterminate} onChange={handleParent} />}
            />
            {childrenBoxes}
        </div>
    )
}

export default React.memo(IndeterminateCheckbox)
