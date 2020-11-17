import React from 'react'
import { Controller, useWatch } from 'react-hook-form'
import { Select } from 'baseui/select'
import Options from './options'
const options = [
    {
        label: 'Long Answer',
        id: 'long'
    },
    {
        label: 'Multi Option',
        id: 'multiOption'
    },
    {
        label: 'Short Answer',
        id: 'short'
    }
]

const SelectType = ({ control, namePrefix }) => {
    const watchData = useWatch({
        control,
        name: `${namePrefix}.type`
    })

    return (
        <div>
            <Controller
                render={props => (
                    <Select
                        inputRef={props.ref}
                        options={options}
                        value={props.value}
                        clearable={false}
                        deleteRemoves={false}
                        escapeClearsValue={false}
                        searchable={false}
                        onChange={params => {
                            props.onChange(params.value)
                        }}
                    />
                )}
                name={`${namePrefix}.type`}
                control={control}
                defaultValue={[
                    {
                        label: 'Long Answer',
                        id: 'long'
                    }
                ]}
            />
            {watchData && watchData[0]?.id === 'multiOption' && (
                <Options
                    control={control}
                    namePrefix={`${namePrefix}.options`}
                />
            )}
        </div>
    )
}
export default SelectType
