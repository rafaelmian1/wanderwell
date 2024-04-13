import {AnchorHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react'

type LinkButtonProps = DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
> & {
    children: ReactNode
}

export const LinkButton = ({children, ...props}: LinkButtonProps) => {
    return (
        <a
            {...props}
            className='bg-gray-700 p-3 rounded-lg self-center cursor-pointer'
        >
            {children}
        </a>
    )
}
