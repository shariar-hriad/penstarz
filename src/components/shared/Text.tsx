import React from 'react'

type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    as?: E
    className?: string
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ElementType<E>, keyof TextOwnProps<E>>

const Text = <E extends React.ElementType = 'div'>({ children, as, color, size, className }: TextProps<E>) => {
    const Component = as || 'div'

    return <Component className={className}>{children}</Component>
}

export default Text
