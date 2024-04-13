import Link from 'next/link'

export function Header() {
    return (
        <header className='w-full flex justify-between h-10 bg-slate-800 p-2'>
            <h1>WanderWell</h1>
            <nav className='flex gap-6'>
                <Link href='/'>Home</Link>
            </nav>
        </header>
    )
}
