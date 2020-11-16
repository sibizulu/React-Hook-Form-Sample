import React from 'react'
import { useForm, useFieldArray, Controller } from 'react-hook-form'
import { Input } from 'baseui/input'
import { Grid, Cell, BEHAVIOR } from 'baseui/layout-grid'
import { Card } from 'baseui/card'
import SelectType from './selectType'
let renderCounter = 0

const Form = () => {
    const { control, handleSubmit, watch } = useForm()
    const { fields, append } = useFieldArray({
        control,
        name: 'test'
    })

    renderCounter++

    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <Grid behavior={BEHAVIOR.fluid}>
                <Cell span={8}>
                    {fields.map((field, index) => {
                        return (
                            <div key={field.id}>
                                <Card>
                                    <Controller
                                        render={({ onChange, ref }) => (
                                            <Input
                                                placeholder="Question"
                                                onBlur={onChange}
                                            />
                                        )}
                                        name={`test[${index}].question`}
                                        control={control}
                                        defaultValue={''}
                                    />

                                    <hr />
                                    <SelectType
                                        namePrefix={`test[${index}]`}
                                        index={index}
                                        control={control}
                                        watch={watch}
                                    />
                                    <hr />
                                </Card>
                            </div>
                        )
                    })}
                </Cell>
                <Cell span={8}>
                    <input type="submit" />
                    <input
                        type="button"
                        onClick={() =>
                            append({
                                type: '',
                                question: ''
                            })
                        }
                        value={'Add more'}
                    />

                    <p>{'RENDER COUNT: ' + renderCounter}</p>
                </Cell>
            </Grid>
        </form>
    )
}
export default Form
