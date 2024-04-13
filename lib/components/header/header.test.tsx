import {render, screen} from '@testing-library/react'
import {expect, test} from 'vitest'

import {Header} from './header'

describe('<Header />', () => {
    test('Header component renders correctly', () => {
        render(<Header />)

        expect(
            screen.getByRole('heading', {level: 1, name: 'WanderWell'}),
        ).toBeDefined()
        expect(screen.getByRole('link', {name: 'Home'})).toBeDefined()
    })
})
