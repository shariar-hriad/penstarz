type Props = {
    id: string
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

const Section = ({ style, id, children, className }: Props) => {
    return (
        <section className={`relative py-6 lg:py-14 ${className}`} id={id} style={style}>
            <div className='container'>{children}</div>
        </section>
    )
}

export default Section
