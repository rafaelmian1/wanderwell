import {render, screen} from '@testing-library/react'
import {redirect} from 'next/navigation'
import {expect, test, vi} from 'vitest'

import {travelMock} from '@/__mocks__/lib/db/Travel'
import {travelSdk} from '@/lib/sdk'
import {resolvedComponent} from '@/tests/helpers'

import TravelPage from './page'

vi.mock('@/lib/sdk')
vi.mock('next/navigation')
vi.mock('./action')

describe('<TravelPage />', () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })

    test('travel not found', async () => {
        vi.mocked(travelSdk.getById).mockResolvedValueOnce(null)

        const TravelPageResolved = await resolvedComponent(TravelPage, {
            params: {id: 'invalid-id'},
        })
        render(<TravelPageResolved />)

        expect(redirect).toHaveBeenCalledOnce()
    })

    test('render', async () => {
        vi.mocked(travelSdk.getById).mockResolvedValueOnce(travelMock)

        const TravelPageResolved = await resolvedComponent(TravelPage, {
            params: {id: travelMock.id},
        })

        render(<TravelPageResolved />)

        expect(
            screen.getByRole('heading', {name: travelMock.name}),
        ).toBeInTheDocument()

        expect(screen.getByText(travelMock.description!)).toBeInTheDocument()

        expect(
            screen.getByRole('button', {name: 'Delete Travel'}),
        ).toBeInTheDocument()
    })
})
