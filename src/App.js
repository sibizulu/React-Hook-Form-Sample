import * as React from 'react'
import { useStyletron } from 'baseui'
import { Grid, Cell, BEHAVIOR } from 'baseui/layout-grid'
import Forms from './components/forms'

export default function App() {
    return (
        <Outer>
            <Grid behavior={BEHAVIOR.fluid}>
                <Cell span={9}>
                    <Content>
                        <Forms />
                    </Content>
                </Cell>
            </Grid>
        </Outer>
    )
}
const Outer = ({ children }) => {
    const [css, theme] = useStyletron()
    return (
        <div
            className={css({
                background: theme.colors.primaryB,
                marginTop: '30px'
            })}>
            {children}
        </div>
    )
}
const Content = ({ children }) => {
    const [css, theme] = useStyletron()
    return (
        <div
            className={css({
                display: 'flex',
                background: theme.colors.primaryB,
                color: theme.colors.accent700,
                padding: '.25rem'
            })}>
            {children}
        </div>
    )
}
