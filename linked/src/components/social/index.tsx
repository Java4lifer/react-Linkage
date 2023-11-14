import { ReactNode } from "react";

interface socialProps {
    url: string;
    children: ReactNode;
}

export function Social({url, children}: socialProps) {
    return(
        <a
        href="url"
        rel="noopener noreferrer"
        target="_blank">
        {children}
        </a>
    )
}