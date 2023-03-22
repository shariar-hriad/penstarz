import Head from 'next/head'

type Props = {
    title?: string
    description?: string
    keywords?: string
}

const Meta = ({ title, description, keywords }: Props) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords} />
        </Head>
    )
}

export default Meta
