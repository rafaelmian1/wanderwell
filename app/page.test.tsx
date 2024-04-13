import {render, screen} from '@testing-library/react'
import {expect, test, vi} from 'vitest'

import {travelSdk} from '@/lib/sdk'
import {DbTravel} from '@/lib/types'
import {resolvedComponent} from '@/tests/helpers'

import TravelsPage from './page'

vi.mock('@/lib/sdk')

export const travelsMock: DbTravel[] = [
    {
        id: '661a49333f09b9c7385bfa37',
        name: 'Travel Mock 1',
        description: 'Desc Mock 1',
        startDate: new Date(),
        endDate: new Date(),
    },
    {
        id: '661a49333f09b9c7385bfa32',
        name: 'Travel Mock 2',
        description: 'Desc Mock 2',
        startDate: new Date(),
        endDate: new Date(),
    },
]

describe('<TravelsPage />', async () => {
    afterEach(() => {
        vi.resetAllMocks()
    })

    describe('Travels page renders correctly', () => {
        test('page title is rendered', async () => {
            const TravelsPageResolved = await resolvedComponent(TravelsPage)

            render(<TravelsPageResolved />)

            expect(
                screen.getByRole('heading', {level: 1, name: 'Travels List'}),
            ).toBeInTheDocument()
        })

        test('`New Travel` button is rendered', async () => {
            const TravelsPageResolved = await resolvedComponent(TravelsPage)

            render(<TravelsPageResolved />)

            expect(
                screen.getByRole('link', {name: 'New travel'}),
            ).toBeInTheDocument()
            expect(
                screen.getByRole('link', {name: 'New travel'}),
            ).toHaveAttribute('href', '/new')
        })

        test('Empty state message when not travels were added yet', async () => {
            vi.mocked(travelSdk.getList).mockResolvedValue([])

            const TravelsPageResolved = await resolvedComponent(TravelsPage)

            render(<TravelsPageResolved />)

            expect(
                screen.getByText(
                    'You have no travels yet. What are you waiting to add your first one?',
                ),
            ).toBeInTheDocument()
        })

        test('No empty state message when travels were added', async () => {
            vi.mocked(travelSdk.getList).mockResolvedValue(travelsMock)

            const TravelsPageResolved = await resolvedComponent(TravelsPage)

            render(<TravelsPageResolved />)

            expect(
                screen.queryByText(
                    'You have no travels yet. What are you waiting to add your first one?',
                ),
            ).not.toBeInTheDocument()
        })

        test('Travels list should be rendered', async () => {
            vi.mocked(travelSdk.getList).mockResolvedValue(travelsMock)

            const TravelsPageResolved = await resolvedComponent(TravelsPage)

            render(<TravelsPageResolved />)

            expect(screen.getByRole('list')).toBeInTheDocument()
            expect(screen.getAllByRole('listitem')).toHaveLength(
                travelsMock.length,
            )
        })
    })
})
