import React from "react";

type Props = {
    className: string | undefined
    link: string
    children: React.ReactNode
}

export default function Tabs({children, link, className}: Props) {
    return (
        <>
            <a className={className} href={link}>{children}</a>
        </>
    )
}
