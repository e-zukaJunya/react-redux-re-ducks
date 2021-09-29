import IndeterminateCheckBox from 'components/parts/IndeterminateCheckBox'
import * as React from 'react'

// 選択肢
const children = ['child1', 'child2', 'child3', 'child4']

const IndeterminateCheckBoxEx = () => {
    return <IndeterminateCheckBox values={children} />
}

export default React.memo(IndeterminateCheckBoxEx)
