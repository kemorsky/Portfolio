import { cn } from  "@/lib/utils";

interface HeadingTextProps {
    id?: string;
    className?: string;
    text: string;
}

export default function HeadingText(props: HeadingTextProps) {
    return (
        <h2 id={props.id} 
            className={
                cn(`text-3xl text-white font-bold font-primary text-center self-center mb-4`, 
                props.className
            )}>
            {props.text}
        </h2>
    )
}