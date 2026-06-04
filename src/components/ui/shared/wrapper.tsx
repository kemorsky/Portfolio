import { cn } from "@/lib/utils"

interface WrapperProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Wrapper(props: WrapperProps) {
    return (
        <div id={props.id} 
            className={cn("z-50 w-full max-w-[50rem] inline-flex flex-col items-center justify-center self-center rounded-xl bg-Customs-Card border border-Customs-Card-Border gap-4 text-white intersect-once", props.className)}
        >
            {props.children}
        </div>
    )
}