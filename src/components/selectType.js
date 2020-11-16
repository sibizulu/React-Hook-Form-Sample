import React from 'react'
import Options from './options'
const SelectType = ({ control, index, watch, changed }) => {
    const output = watch('exam')

    return (
        <>
            {output[index]?.type[0]?.id === 'multiOption' && (
                <Options
                    control={control}
                    namePrefix={`exam[${index}].options`}
                    watch={watch}
                />
            )}
        </>
    )
}

export default SelectType
