import {LinkButton, TravelCard} from '@/lib/components'
import {travelSdk} from '@/lib/sdk'

export default async function Page() {
    const travels = (await travelSdk.getList()) ?? []

    return (
        <>
            <section className='flex justify-between items-center'>
                <h1 className='text-xl'>Travels List</h1>
                <LinkButton href='/new'>New travel</LinkButton>
            </section>

            <section className='mt-4'>
                {!travels.length && (
                    <h2 className='text-lg mb-1 mt-8 text-center'>
                        You have no travels yet. What are you waiting to add
                        your first one?
                    </h2>
                )}

                <ul className='grid grid-cols-2 gap-4'>
                    {travels.map((travel) => (
                        <li key={travel.id}>
                            <TravelCard travel={travel} />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
