import React from 'react'
import Options from './options'
const SelectType = ({ control, index, watch }) => {
    const output = watch('exam')

    return (
        <>
            {output[index]?.type[0]?.id === 'multiOption' && (
                <Options
                    control={control}
                    namePrefix={`exam[${index}].options`}
                />
            )}
        </>
    )
}

export default SelectType
