// "use client"

interface Props {
    background?: string,
    text?: string
}

const BlankSection = ({ background, text }: Props) => {
    return (
        <section className={`h-screen grid place-items-center bg-foreground`}>
            <h1 className={`text-background font-bold text-3xl`}>Section</h1>
        </section>
    )
}

export default BlankSection