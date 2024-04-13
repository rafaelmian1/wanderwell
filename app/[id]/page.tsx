import {redirect} from 'next/navigation'

import {Button} from '@/lib/components'
import {travelSdk} from '@/lib/sdk'

export default async function Page({params: {id}}: {params: {id: string}}) {
    const travel = await travelSdk.getById(id)

    const deleteTravel = async () => {
        'use server'

        await travelSdk.deleteById(id)
        redirect('/')
    }

    if (!travel) redirect('/404')
    else
        return (
            <>
                <h1 className='text-2xl mb-2'>{travel.name}</h1>

                <p className='text-sm text-gray-400 mb-6'>
                    From {travel.startDate?.toLocaleDateString() ?? 'n/a'} to{' '}
                    {travel.endDate?.toLocaleDateString() ?? 'n/a'}
                </p>

                <p className='text-sm text-gray-50'>
                    {travel.description ?? ''}
                </p>

                <form action={deleteTravel} className='mt-8'>
                    <Button type='submit'>Delete Travel</Button>
                </form>
            </>
        )
}
