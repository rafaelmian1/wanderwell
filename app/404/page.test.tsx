import {render, screen} from '@testing-library/react'
import {expect, test} from 'vitest'

import NotFoundPage from './page'

describe('<NotFoundPage />', () => {
    test('Not found (404) page renders correctly', () => {
        render(<NotFoundPage />)

        expect(
            screen.getByRole('heading', {level: 1, name: 'Not Found'}),
        ).toBeDefined()
        expect(screen.getByRole('link', {name: 'Go back home'})).toBeDefined()
    })
})
