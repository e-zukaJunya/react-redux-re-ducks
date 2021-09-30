import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import { useStringState } from 'hooks/common/commonHooks'
import React from 'react'

const RadioEx = () => {
    const [value, setValue] = useStringState('female')

    return (
        <div>
            <FormControl component="fieldset">
                <RadioGroup value={value} onChange={setValue.update}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
            </FormControl>
            <p>{`you choiced ${value}`}</p>
        </div>
    )
}

export default React.memo(RadioEx)
