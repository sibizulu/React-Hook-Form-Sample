import React from 'react'
import { useForm, useFieldArray, Controller } from 'react-hook-form'
import { useStyletron } from 'baseui'
import { Input } from 'baseui/input'
import { Select } from 'baseui/select'

import { FormControl } from 'baseui/form-control'
import { ButtonGroup } from 'baseui/button-group'
import { Button } from 'baseui/button'
import SelectType from './selectType'

import DeleteAlt from 'baseui/icon/delete-alt'

export default function Forms() {
    const { control, handleSubmit, watch } = useForm({
        defaultValues: {
            exam: [
                {
                    question: 'What is your choice?',
                    type: 'multiOption',
                    options: [{ name: 'here' }]
                }
            ]
        }
    })
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'exam'
    })
    const options = [
        {
            label: 'Multi Option',
            id: 'multiOption'
        },
        {
            label: 'Short Answer',
            id: 'short'
        },
        {
            label: 'Long Answer',
            id: 'long'
        }
    ]

    const [css] = useStyletron()

    return (
        <div
            className={css({
                width: '90%'
            })}>
            <form onSubmit={handleSubmit(data => console.log(data))}>
                {fields.map((item, index) => {
                    return (
                        <FormFieldWrapper key={item.id}>
                            <div
                                className={css({
                                    position: 'relative'
                                })}>
                                <Controller
                                    control={control}
                                    name={`exam[${index}].question`}
                                    rules={{ required: true }}
                                    defaultValue={''}
                                    render={props => (
                                        <FormControl
                                            label="Question"
                                            caption={item.caption}>
                                            <Input
                                                inputRef={props.ref}
                                                value={props.value}
                                                onChange={e => {
                                                    props.onChange(
                                                        e.target.value
                                                    )
                                                }}
                                            />
                                        </FormControl>
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name={`exam[${index}].type`}
                                    rules={{ required: true }}
                                    defaultValue={[
                                        {
                                            id: item.type
                                        }
                                    ]}
                                    render={props => (
                                        <FormControl label="Type">
                                            <Select
                                                options={options}
                                                value={props.value}
                                                placeholder={''}
                                                onChange={params => {
                                                    props.onChange(params.value)
                                                }}
                                            />
                                        </FormControl>
                                    )}
                                />
                                <SelectType
                                    control={control}
                                    index={index}
                                    watch={watch}
                                />

                                <DeleteAlt
                                    className={css({
                                        position: 'absolute',
                                        top: 0,
                                        right: 0
                                    })}
                                    onClick={() => remove(index)}
                                    size={20}
                                />
                            </div>
                        </FormFieldWrapper>
                    )
                })}

                <ButtonGroup>
                    <Button
                        onClick={() =>
                            append({
                                type: 'multiOption',
                                question: '',
                                lastName: '',
                                caption: 'Question for multi option'
                            })
                        }>
                        MultiOption
                    </Button>
                    <Button
                        onClick={() =>
                            append({
                                type: 'short',
                                question: '',
                                caption: 'Question for short answer'
                            })
                        }>
                        Short Answer
                    </Button>
                    <Button
                        onClick={() =>
                            append({
                                type: 'long',
                                question: '',
                                caption: 'Question for Long answer'
                            })
                        }>
                        Long Answer
                    </Button>
                </ButtonGroup>
            </form>
        </div>
    )
}

const FormFieldWrapper = ({ children }) => {
    const [css] = useStyletron()
    return (
        <div
            className={css({
                padding: '1rem',
                margin: '1rem 0',
                border: '1px solid #eee',
                width: '100%'
            })}>
            {children}
        </div>
    )
}
