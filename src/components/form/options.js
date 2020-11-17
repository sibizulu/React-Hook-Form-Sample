import React from 'react'
import { useFieldArray, Controller } from 'react-hook-form'
import { useStyletron } from 'baseui'
import { Button } from 'baseui/button'
import { Input } from 'baseui/input'

import DeleteAlt from 'baseui/icon/delete-alt'

export default function Options({ control, namePrefix, watch, index, style }) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: namePrefix
    })

    return (
        <div className="nested">
            {fields.map((item, index) => {
                return (
                    <FormFieldWrapper key={item.id}>
                        <Controller
                            name={`${namePrefix}[${index}].name`}
                            control={control}
                            defaultValue={''}
                            render={props => (
                                <Input
                                    placeholder={`Option`}
                                    onChange={props.onChange}
                                />
                            )}
                        />
                        <DeleteAlt onClick={() => remove(index)} size={20} />
                    </FormFieldWrapper>
                )
            })}
            <section>
                <Button
                    onClick={() => {
                        append({ name: '' })
                    }}>
                    Add Options
                </Button>
            </section>
        </div>
    )
}

const FormFieldWrapper = ({ children }) => {
    const [css] = useStyletron()
    return (
        <div
            className={css({
                display: 'flex',
                margin: '10px 0',
                width: '60%'
            })}>
            {children}
        </div>
    )
}
