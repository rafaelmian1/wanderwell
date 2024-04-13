import {render, screen} from '@testing-library/react'
import {expect, test} from 'vitest'

import Layout from './layout'

describe('<Layout />', () => {
    test('Layout component renders correctly', () => {
        render(<Layout />)

        expect(
            screen.getByRole('heading', {level: 1, name: 'WanderWell'}),
        ).toBeDefined()
        expect(screen.getByRole('link', {name: 'Home'})).toBeDefined()
    })
})
