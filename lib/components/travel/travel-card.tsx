import Link from 'next/link'

import {ellipsis} from '@/lib/helpers'
import {DbTravel} from '@/lib/types'

export const TravelCard = ({travel}: {travel: DbTravel}) => {
    return (
        <article className='bg-slate-800 rounded-3xl p-6 h-40'>
            <div className='flex justify-between items-center'>
                <h2 className='text-lg mb-1'>{travel.name}</h2>
                <Link className='text-sm text-white' href={`/${travel.id}`}>
                    {`>>`}
                </Link>
            </div>

            <p className='text-sm text-gray-400 mb-4'>
                From {travel.startDate?.toLocaleDateString() ?? 'n/a'} to{' '}
                {travel.endDate?.toLocaleDateString() ?? 'n/a'}
            </p>

            <p className='text-sm text-gray-50'>
                {ellipsis(travel.description ?? '', 70)}
            </p>
        </article>
    )
}
