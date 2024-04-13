import {render, screen} from '@testing-library/react'
import {expect, test} from 'vitest'

import {travelMock} from '@/__mocks__/lib/db/Travel'

import {TravelCard} from './travel-card'

describe('<TravelCard />', () => {
    describe('Travel card component renders correctly', () => {
        test('with all travel props', () => {
            render(<TravelCard travel={travelMock} />)

            expect(
                screen.getByRole('heading', {level: 2, name: travelMock.name}),
            ).toBeInTheDocument()
            expect(
                screen.getByText(travelMock.description!),
            ).toBeInTheDocument()
            expect(
                screen.getByText(
                    `From ${travelMock.startDate!.toLocaleDateString()} to ${travelMock.endDate!.toLocaleDateString()}`,
                ),
            ).toBeInTheDocument()
        })

        test('with optional props undefined', () => {
            travelMock.description = undefined
            travelMock.startDate = undefined
            travelMock.endDate = undefined

            render(<TravelCard travel={travelMock} />)

            expect(
                screen.getByRole('heading', {level: 2, name: travelMock.name}),
            ).toBeInTheDocument()
            expect(screen.getByText('From n/a to n/a')).toBeInTheDocument()
        })
    })
})
