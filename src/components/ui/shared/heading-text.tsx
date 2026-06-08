interface HeadingTextProps {
    id?: string;
    text: string;
}

export default function HeadingText(props: HeadingTextProps) {
    return (
        <h2 id={props.id} className='text-3xl text-white font-bold font-primary text-center self-center mb-4'>{props.text}</h2>
    )
}