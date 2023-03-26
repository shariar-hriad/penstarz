import React from 'react'

type BoxOwnProps<T extends React.ElementType> = {
    children?: React.ReactNode
    as?: T
    id?: string
    className?: string
}

type BoxProps<T extends React.ElementType> = BoxOwnProps<T> & Omit<React.ComponentProps<T>, keyof BoxOwnProps<T>>

const Box = <T extends React.ElementType = 'div'>({ as, children, id, className }: BoxProps<T>) => {
    const Component = as || 'div'

    return (
        <Component id={id} className={className}>
            {children}
        </Component>
    )
}

export default Box
