import { Checkbox, FormControlLabel } from '@material-ui/core'
import { useCheckbox } from 'hooks/common/commonHooks'
import React from 'react'

const CheckBoxEx = () => {
    const [checked, setChecked] = useCheckbox(false)
    return (
        <div>
            <FormControlLabel control={<Checkbox checked={checked} onChange={setChecked} />} label="Label" />
            <p>{checked.toString()}</p>
        </div>
    )
}

export default React.memo(CheckBoxEx)
