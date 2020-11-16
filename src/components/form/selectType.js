import React from 'react'
import { Controller, useFieldArray } from 'react-hook-form'
import { Input } from 'baseui/input'
import { Select } from 'baseui/select'
import Options from '../options'
export default ({ watch, control, namePrefix, index }) => {
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

    const watchData = watch(namePrefix)
    console.log(watchData, watchData?.type[0]?.id)
    console.log(watchData && watchData?.type[0]?.id === 'multiOption')
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
                        defaultValue={[
                            {
                                label: 'Long Answer',
                                id: 'long'
                            }
                        ]}
                        onChange={params => {
                            props.onChange(params.value)
                        }}
                    />
                )}
                name={`${namePrefix}.type`}
                control={control}
                defaultValue={''}
            />
            {watchData && watchData?.type[0]?.id === 'multiOption' && (
                <Options
                    control={control}
                    namePrefix={`test[${index}].options`}
                    watch={watch}
                    index={index}
                />
            )}
        </div>
    )
}
