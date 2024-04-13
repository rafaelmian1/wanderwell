import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react'

type ButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    children: ReactNode
}

export const Button = ({children, ...props}: ButtonProps) => {
    return (
        <button {...props} className='bg-gray-700 p-3 rounded-lg self-center'>
            {children}
        </button>
    )
}
